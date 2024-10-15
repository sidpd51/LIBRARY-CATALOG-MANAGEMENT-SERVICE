const { Op } = require("sequelize");
const { Book } = require("../models/index.js");
const { ValidationError, AppError } = require("../utils/errors/index.js");
const { StatusCodes } = require("http-status-codes");

class BookRepository {
    #searchFilter(data) {
        let filter = {};
        if (data.title) {
            filter.title = {
                [Op.startsWith]: data.title,
            };
        }

        if (data.author) {
            filter.author = {
                [Op.startsWith]: data.author,
            };
        }

        if (data.genre) {
            filter.genre = data.genre;
        }

        if (data.edition) {
            filter.edition = data.edition;
        }

        if (data.isbn) {
            filter.isbn = data.isbn;
        }

        if (data.minYear && data.maxYear) {
            Object.assign(filter, {
                [Op.and]: {
                    price: {
                        [Op.gte]: data.minYear,
                    },
                    price: {
                        [Op.lte]: data.maxYear,
                    },
                },
            });
        } else if (data.minYear) {
            Object.assign(filter, {
                price: { [Op.gte]: data.minYear },
            });
        } else if (data.maxYear) {
            Object.assign(filter, {
                price: { [Op.lte]: data.maxYear },
            });
        }

        return filter;
    }
    async createBook(data) {
        try {
            const book = await Book.create(data);
            return book;
        } catch (error) {
            if (error.name == "SequelizeValidationError") {
                throw new ValidationError(error);
            }
            if (error.name == "SequelizeUniqueConstraintError") {
                throw new AppError(
                    "ValidationError",
                    error.message,
                    "Isbn no. should be unique!",
                    StatusCodes.BAD_REQUEST
                );
            }

            throw new AppError(
                "RepositoryError",
                "Cannot add the Book",
                "There was some issue adding book, please try again later!",
                StatusCodes.INTERNAL_SERVER_ERROR
            );
        }
    }

    async getBook(bookId) {
        try {
            const book = await Book.findByPk(bookId);
            if (book == null) {
                throw new AppError(
                    "BookNotFoundError",
                    "Book not found!",
                    "Please check if the book ID is correct and try again",
                    StatusCodes.BAD_REQUEST
                );
            }
            return book;
        } catch (error) {
            throw new AppError(
                "RepositoryError",
                "Cannot get the Book",
                "There was some issue getting the book, please try again later!",
                StatusCodes.INTERNAL_SERVER_ERROR
            );
        }
    }

    async deleteBook(bookId) {
        try {
            const response = await Book.destroy({
                where: {
                    id: bookId,
                },
            });
            console.log(response)
            if (response) {
                return true;
            }

            throw new AppError(
                "BookNotFoundError",
                "Book not found!",
                "Please check if the book ID is correct and try again",
                StatusCodes.BAD_REQUEST
            );
        } catch (error) {
            throw new AppError(
                "RepositoryError",
                "Cannot delete Book",
                "There was some issue deleting book, please try again later!",
                StatusCodes.INTERNAL_SERVER_ERROR
            );
        }
    }

    async updateBook(data, bookId) {
        try {
            const response = await Book.update(data, {
                where: {
                    id: bookId,
                },
            });
            if (response[0]) {
                return true;
            }
            return false;
        } catch (error) {
            if (error.name == "SequelizeValidationError") {
                throw new ValidationError(error);
            }
            if (error.name == "SequelizeUniqueConstraintError") {
                throw new AppError(
                    "ValidationError",
                    error.message,
                    "Isbn no. should be unique!",
                    StatusCodes.BAD_REQUEST
                );
            }
            if (error.name == "SequelizeDatabaseError") {
                throw new AppError(
                    "ValidationError",
                    error.message,
                    "Required fields can't be empty!",
                    StatusCodes.BAD_REQUEST
                );
            }

            throw new AppError(
                "RepositoryError",
                "Cannot update Book",
                "There was some issue updating the book, please try again later!",
                StatusCodes.INTERNAL_SERVER_ERROR
            );
        }
    }

    async getAllBook(filter) {
        try {
            const filterObject = this.#searchFilter(filter);
            const book = await Book.findAll({
                where: filterObject,
            });
            if (book == null) {
                throw new AppError(
                    "BookNotFoundError",
                    "Book not found!",
                    "Please check if the book ID is correct and try again",
                    StatusCodes.BAD_REQUEST
                );
            }
            return book;
        } catch (error) {
            throw new AppError(
                "RepositoryError",
                "Cannot get the Book",
                "There was some issue getting the book, please try again later!",
                StatusCodes.INTERNAL_SERVER_ERROR
            );
        }
    }
}

module.exports = BookRepository;

const { Op } = require("sequelize");
const { Book } = require("../models/index.js");

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
            console.log("something went wrong in repository layer");
            console.log(error);
            throw { error };
        }
    }

    async getBook(bookId) {
        try {
            const book = await Book.findByPk(bookId);
            return book;
        } catch (error) {
            console.log("something went wrong in repository layer");
            console.log(error);
            throw { error };
        }
    }

    async deleteBook(bookId) {
        try {
            const response = await Book.destroy({
                where: {
                    id: bookId,
                },
            });
            if (response) {
                return true;
            }

            return false;
        } catch (error) {
            console.log("something went wrong in repository layer");
            console.log(error);
            throw { error };
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
            console.log("something went wrong in repository layer");
            console.log(error);
            throw { error };
        }
    }

    async getAllBook(filter) {
        try {
            const filterObject = this.#searchFilter(filter);
            const book = await Book.findAll({
                where: filterObject,
            });

            return book;
        } catch (error) {
            console.log("something went wrong in repository layer");
            console.log(error);
            throw { error };
        }
    }
}

module.exports = BookRepository;

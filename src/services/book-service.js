const BookRepository = require("../repositories/book-repository.js");
const { ServiceError } = require("../utils/errors/index.js");
class BookService {
    constructor() {
        this.bookRepository = new BookRepository();
    }

    async createBook(data) {
        try {
            const book = this.bookRepository.createBook(data);
            return book;
        } catch (error) {
            if (
                error.name == "SequelizeValidationError" ||
                error.name == "SequelizeUniqueConstraintError" ||
                error.name == "RepositoryError"
            ) {
                throw error;
            }

            throw new ServiceError();
        }
    }

    async getBook(bookId) {
        try {
            const book = this.bookRepository.getBook(bookId);
            return book;
        } catch (error) {
            if (
                error.name == "RepositoryError" ||
                error.name == "BookNotFoundError"
            ) {
                throw error;
            }
            throw new ServiceError();
        }
    }

    async deleteBook(bookId) {
        try {
            const response = this.bookRepository.deleteBook(bookId);
            return response;
        } catch (error) {
            if (
                error.name == "RepositoryError" ||
                error.name == "BookNotFoundError"
            ) {
                throw error;
            }
            throw new ServiceError();
        }
    }

    async updateBook(data, bookId) {
        try {
            const response = this.bookRepository.updateBook(data, bookId);
            return response;
        } catch (error) {
            if (
                error.name == "ValidationError" ||
                error.name == "RepositoryError" ||
                error.name == "BookNotFoundError"
            ) {
                throw error;
            }
            throw new ServiceError();
        }
    }

    async getAllBook(filter) {
        try {
            const books = this.bookRepository.getAllBook(filter);
            return books;
        } catch (error) {
            if (
                error.name == "RepositoryError" ||
                error.name == "BookNotFoundError"
            ) {
                throw error;
            }
            throw new ServiceError();
        }
    }
}

module.exports = BookService;

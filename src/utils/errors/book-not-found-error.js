const { StatusCodes } = require("http-status-codes");

class BookNotFoundError extends Error {
    constructor() {
        super();

        this.name = "BookNotFoundError";
        this.message = "Book not found!";
        this.explanation = "Please check if the book ID is correct and try again";
        this.statusCode = StatusCodes.NOT_FOUND;
    }
}

module.exports = BookNotFoundError;

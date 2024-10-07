const BookRepository = require("../repositories/book-repository.js");

class BookService {
    constructor() {
        this.bookRepository = new BookRepository();
    }

    async createBook(data) {
        try {
            const book = this.bookRepository.createBook(data);
            return book;
        } catch (error) {
            console.log("something went wrong in service layer");
            console.log(error);
        }
    }
}

module.exports = BookService;

const { Book } = require("../models/index.js");

class BookRepository {
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

    async getBook(bookId){
        try {
            const book = await Book.findByPk(bookId);
            return book;
        } catch (error) {
            console.log("something went wrong in repository layer");
            console.log(error);
            throw { error };
        }
    }
}

module.exports = BookRepository;

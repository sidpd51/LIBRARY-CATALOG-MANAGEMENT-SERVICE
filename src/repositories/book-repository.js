const { where } = require("sequelize");
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
            await Book.destroy({
                where: {
                    id: bookId,
                },
            });
            return true;
        } catch (error) {
            console.log("something went wrong in repository layer");
            console.log(error);
            throw { error };
        }
    }

    async updateBook(data, bookId) {
        try {
            const response = await Book.update(data,{
                where: {
                    id: bookId
                }
            })
            if(response[0]){
                return true
            }
            return false;
        } catch (error) {
            console.log("something went wrong in repository layer");
            console.log(error);
            throw { error };
        }
    }

}

module.exports = BookRepository;

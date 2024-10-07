const BookService = require("../services/book-service.js");

const bookService = new BookService();

const create = async (req, res) => {
    try {
        const book = await bookService.createBook(req.body);
        return res.status(201).json({
            data: book,
            success: true,
            message: "Successfully created the book!",
            err: {},
        });
    } catch (error) {
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to create a book!",
            err: error,
        });
    }
};

const get = async (req, res) => {
    try {
        const book = await bookService.getBook(req.params.id);
        return res.status(201).json({
            data: book,
            success: true,
            message: "Successfully got the book!",
            err: {},
        });
    } catch (error) {
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to get the book!",
            err: error,
        });
    }
};

module.exports = {
    create,
    get,
};

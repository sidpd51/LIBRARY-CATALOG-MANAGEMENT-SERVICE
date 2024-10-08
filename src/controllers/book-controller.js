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

const destroy = async (req, res) => {
    try {
        const response = await bookService.deleteBook(req.params.id);
        if (!response) {
            return res.status(404).json({
                data: response,
                success: false,
                message: "Book not found!",
                err: {},
            });
        }
        return res.status(201).json({
            data: response,
            success: true,
            message: "Successfully deleted the book!",
            err: {},
        });
    } catch (error) {
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to delete the book!",
            err: error,
        });
    }
};

const update = async (req, res) => {
    try {
        const response = await bookService.updateBook(req.body, req.params.id);
        if (!response) {
            return res.status(404).json({
                data: response,
                success: false,
                message: "Book not found!",
                err: {},
            });
        }
        return res.status(201).json({
            data: response,
            success: true,
            message: "Successfully updated the book!",
            err: {},
        });
    } catch (error) {
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to update the book!",
            err: error,
        });
    }
};

module.exports = {
    create,
    get,
    destroy,
    update,
};

"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Book extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Book.init(
        {
            title: { type: DataTypes.STRING, allowNull: false },
            author: { type: DataTypes.STRING, allowNull: false },
            genre: {
                type: DataTypes.ENUM,
                values: [
                    "Fiction",
                    "Non-Fiction",
                    "Science Fiction",
                    "Fantasy",
                    "Mystery",
                    "Thriller",
                    "Romance",
                    "Horror",
                    "Biography",
                    "Self-Help",
                    "History",
                    "Science",
                    "Philosophy",
                    "Children",
                    "Young Adult",
                    "Graphic Novel",
                    "Poetry",
                    "Travel",
                    "Religion",
                    "Art",
                ],
                defaultValue: "Fiction",
            },
            isbn: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
                validate: {
                    is: {
                        args: /^(ISBN(?:-1[03])?: )?(?=[-0-9]{10,17}$)(?=(?:\d+-?){4,7}\d+$)(?=\d{1,5}[- ]?\d+[- ]?\d+[- ]?(\d|X)$)(\d{1,5}[- ]?\d+[- ]?(\d|X)|\d{13})$/,
                        msg: "ISBN must be a valid ISBN-10 or ISBN-13 format.",
                    },
                },
            },
            publicationDate: { type: DataTypes.DATE, allowNull: false },
            edition: { type: DataTypes.STRING, allowNull: false },
            language: { type: DataTypes.STRING, allowNull: false },
            copiesAvailable: { type: DataTypes.INTEGER, allowNull: false },
            copiesTotal: { type: DataTypes.INTEGER, allowNull: false },
            summary: { type: DataTypes.TEXT, allowNull: false },
            publisher: { type: DataTypes.STRING, allowNull: false },
            coverImageUrl: { type: DataTypes.STRING, allowNull: false },
        },
        {
            sequelize,
            modelName: "Book",
        }
    );
    return Book;
};

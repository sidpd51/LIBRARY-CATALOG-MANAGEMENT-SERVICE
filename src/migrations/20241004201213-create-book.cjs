"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("Books", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            title: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            author: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            genre: {
                type: Sequelize.ENUM,
                allowNull: false,
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
                type: Sequelize.STRING,
                allowNull: false,
                unique:true,
                validate: {
                  is: {
                    args: /^(ISBN(?:-1[03])?: )?(?=[-0-9]{10,17}$)(?=(?:\d+-?){4,7}\d+$)(?=\d{1,5}[- ]?\d+[- ]?\d+[- ]?(\d|X)$)(\d{1,5}[- ]?\d+[- ]?(\d|X)|\d{13})$/,
                    msg: "ISBN must be a valid ISBN-10 or ISBN-13 format."
                  }
                }
            },
            publicationDate: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            edition: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            language: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            copiesAvailable: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            copiesTotal: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            summary: {
                type: Sequelize.TEXT,
                allowNull: false,
            },
            publisher: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            coverImageUrl: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("Books");
    },
};

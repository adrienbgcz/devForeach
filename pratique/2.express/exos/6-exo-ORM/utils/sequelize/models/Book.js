const db = require("../db");
const Sequelize = require("Sequelize");

const Book = db.define("book", {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    year: {
        type: Sequelize.STRING,
        allowNull: false
    },
    author: {
        type: Sequelize.STRING,
        allowNull: false
    },
    
    price: {
        type: Sequelize.STRING,
        allowNull: true
    },
    stock: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
});

module.exports = Book;
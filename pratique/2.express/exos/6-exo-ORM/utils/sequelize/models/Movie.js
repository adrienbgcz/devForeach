const db = require("../db");
const Sequelize = require("Sequelize");

const Movie = db.define("movie", {
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
    }
});

module.exports = Movie;
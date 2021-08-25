const db = require("../db");
const Sequelize = require("Sequelize");

const Library = db.define("library", {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    person_id: {
        type: Sequelize.INTEGER,
        allowNull: true
    }
});

module.exports = Library;
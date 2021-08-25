const db = require("../db");
const Sequelize = require("Sequelize");

const User = db.define("person", {
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
  }
});

module.exports = User;

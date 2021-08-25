const Sequelize = require("Sequelize");

const options = {
  define: {
    //prevent sequelize from pluralizing table names
    freezeTableName: true,
    timestamps: false
  }
};

const sequelize = new Sequelize(
  "postgres://postgres:postgres@localhost:5432/library",
  options
);

module.exports = sequelize;

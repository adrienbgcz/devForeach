const { body } = require("express-validator");

const movieRules = () => {
return [
    body("movie.title").exists().withMessage("Title is empty"),
    body("movie.title")
      .trim()
      .toLowerCase()
      .isLength({
        min: 3,
        max: 50
      })
      .withMessage("Title must be between 3 and 25 characters")
  ]
}
  module.exports = movieRules;
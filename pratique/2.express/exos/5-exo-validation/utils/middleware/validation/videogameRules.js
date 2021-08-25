const { body } = require("express-validator");

const videogameRules = () => {
   return [
        body("videogame.title").exists().withMessage("Title is empty"),
        body("videogame.title")
          .trim()
          .toLowerCase()
          .isLength({
            min: 3,
            max: 50
          })
          .withMessage("Title must be between 3 and 25 characters")
      ]
}
  module.exports = videogameRules;
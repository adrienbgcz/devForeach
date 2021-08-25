const { body } = require("express-validator");

const libraryRules = () => {
return [
    body("library.name").exists().withMessage("Title is empty"),
    body("library.name")
      .trim()
      .toLowerCase()
      .isLength({
        min: 3,
        max: 50
      })
      .withMessage("Author must be between 3 and 25 characters"),
    body("library.person_id").exists().withMessage("Author is empty"),
    body("library.person_id")
      .trim()
      .toLowerCase()
      .isInt()
      .isLength({
        min: 1,
        max: 25
      })
      .withMessage("Author must be between 3 and 25 characters"),
  ]
}
  module.exports = libraryRules;
const { body } = require("express-validator");


const bookRules = () => {
    return [
    body("book.title").exists().withMessage("Title is empty"),
    body("book.title")
      .trim()
      .toLowerCase()
      .isLength({
        min: 3,
        max: 50
      })
      .withMessage("Author must be between 3 and 25 characters"),
    body("book.author").exists().withMessage("Author is empty"),
    body("book.author")
      .trim()
      .toLowerCase()
      .isLength({
        min: 3,
        max: 25
      })
      .withMessage("Author must be between 3 and 25 characters"),
    body("book.year").exists().withMessage("Year is empty"),
    body("book.year")
      .trim()
      .toLowerCase()
      .isLength({
        min: 4,
        max: 4
      })
      .withMessage("Year must be 4 characters")
  ]
}

module.exports = bookRules;
const { body } = require("express-validator");


const userRules = () => {
    return [
        body("user.name").exists().withMessage("Name is empty"),
        body("user.name")
          .trim()
          .toLowerCase()
          .isLength({
            min: 3,
            max: 50
          })
          .withMessage("Name must be between 3 and 50 characters")
      ]
}

module.exports = userRules;
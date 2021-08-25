const { validationResult } = require("express-validator");

const validate = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) res.status(400).json(errors);
    else next();
  }


  module.exports = validate;
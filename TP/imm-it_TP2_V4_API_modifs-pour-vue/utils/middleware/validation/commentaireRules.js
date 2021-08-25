const { body } = require("express-validator");


const commentaireRules = () => {
    return [
        body("commentaire.date_commentaire").exists().withMessage("Date_commentaire is empty"),
        body("commentaire.date_commentaire")
            .isDate()
            .withMessage("Date_commentaire must be a date"),
        body("commentaire.note").exists().withMessage("Note is empty"),
        body("commentaire.note")
            .trim()
            .toLowerCase()
            .isLength({
                min: 1,
                max: 1
            })
            .withMessage("Note must be 1 character"),
        body("commentaire.contenu").exists().withMessage("Contenu is empty"),
        body("commentaire.contenu")
            .trim()
            .toLowerCase()
            .isLength({
                min: 1,
                max: 500
            })
            .withMessage("Contenu must be between 10 and 500 characters")
    ]
}

module.exports = commentaireRules;
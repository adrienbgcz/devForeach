const { body } = require("express-validator");


const centreVacancesRules = () => {
    return [
        body("centreVacances.nom").exists().withMessage("Nom is empty"),
        body("centreVacances.nom")
            .trim()
            .toLowerCase()
            .isLength({
                min: 3,
                max: 25
            })
            .withMessage("Nom must be between 3 and 25 characters"),
        body("centreVacances.cp").exists().withMessage("CP is empty"),
        body("centreVacances.cp")
            .trim()
            .toLowerCase()
            .isLength({
                min: 5,
                max: 5
            })
            .withMessage("CP must be 5 characters"),
        body("centreVacances.ville").exists().withMessage("Ville is empty"),
        body("centreVacances.ville")
            .trim()
            .toLowerCase()
            .isLength({
                min: 2,
                max: 30
            })
            .withMessage("Ville must be between 2 and 30 characters"),
        body("centreVacances.num_voie").exists().withMessage("Num_voie is empty"),
        body("centreVacances.num_voie")
            .trim()
            .toLowerCase()
            .isLength({
                min: 1,
                max: 5
            })
            .withMessage("Num_voie must be between 1 and 5 characters"),
        body("centreVacances.libelle_voie").exists().withMessage("Libelle_voie is empty"),
        body("centreVacances.libelle_voie")
            .trim()
            .toLowerCase()
            .isLength({
                min: 3,
                max: 100
            })
            .withMessage("Libelle_voie must be between 3 and 100 characters"),
        body("centreVacances.id_region").exists().withMessage("id_region is empty"),
        body("centreVacances.id_region")
            .trim()
            .toLowerCase()
            .isLength({
                min: 1,
                max: 2
            })
            .withMessage("id_region must be 1 or 2 characters")
    ]
}

module.exports = centreVacancesRules;



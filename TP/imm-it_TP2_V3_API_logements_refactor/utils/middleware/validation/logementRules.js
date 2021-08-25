const { body } = require("express-validator");


const logementRules = () => {
    return [
        body("logement.titre").exists().withMessage("titre is empty"),
        body("logement.titre")
            .trim()
            .toLowerCase()
            .isLength({
                min: 3,
                max: 25
            })
            .withMessage("Titre must be between 3 and 25 characters"),
        body("logement.description").exists().withMessage("Description is empty"),
        body("logement.description")
            .trim()
            .toLowerCase()
            .isLength({
                min: 10,
                max: 1500
            })
            .withMessage("Description must be between 10 and 1500 characters"),
        body("logement.nombre_pieces").exists().withMessage("Nombre_pieces is empty"),
        body("logement.nombre_pieces")
            .trim()
            .toLowerCase()
            .isLength({
                min: 1,
                max: 2
            })
            .withMessage("Nombre_pieces must be 1 or 2 characters"),
        body("logement.nombre_chambres").exists().withMessage("Nombre_chambres is empty"),
        body("logement.nombre_chambres")
            .trim()
            .toLowerCase()
            .isLength({
                min: 1,
                max: 2
            })
            .withMessage("Nombre_chambres must be 1 or 2 characters"),
        body("logement.surface_interieure").exists().withMessage("Surface_interieure is empty"),
        body("logement.surface_interieure")
            .trim()
            .toLowerCase()
            .isLength({
                min: 1,
                max: 3
            })
            .withMessage("Surface_interieure must be between 1 and 3 characters"),
        body("logement.surface_exterieure").exists().withMessage("Surface_exterieure is empty"),
        body("logement.surface_exterieure")
            .trim()
            .toLowerCase()
            .isLength({
                min: 1,
                max: 3
            })
            .withMessage("Surface_exterieure must be between 1 and 3 characters"),
        body("logement.animaux").exists().withMessage("Animaux is empty"),
        body("logement.animaux")
            .isBoolean()
            .withMessage("Animaux must be boolean"),
        body("logement.id_centre").exists().withMessage("id_centre is empty"),
        body("logement.id_centre")
            .trim()
            .toLowerCase()
            .isLength({
                min: 1,
                max: 2
            })
            .withMessage("id_centre must be 1 or 2 characters")
    ]
}

module.exports = logementRules;
const { body } = require("express-validator");


const reservationRules = () => {
    return [
        body("reservation.numero_reservation").exists().withMessage("Numero_reservation is empty"),
        body("reservation.numero_reservation")
            .trim()
            .toLowerCase()
            .isLength({
                min: 1,
                max: 6
            })
            .withMessage("Numero_reservation must be between 1 and 6 characters"),
        body("reservation.date_arrivee").exists().withMessage("Date_arrivee is empty"),
        body("reservation.date_arrivee")
            .isDate()
            .withMessage("Date_arrivee must be a date"),
        body("reservation.date_depart").exists().withMessage("Date_depart is empty"),
        body("reservation.date_depart")
            .isDate()
            .withMessage("Date_depart must be a date"),
        body("reservation.id_logement").exists().withMessage("id_logement is empty"),
        body("reservation.id_logement")
            .trim()
            .toLowerCase()
            .isLength({
                min: 1,
                max: 6
            })
            .withMessage("id_logement must be between 1 and 6 characters"),
        body("reservation.id_utilisateur").exists().withMessage("id_utilisateur is empty"),
        body("reservation.id_utilisateur")
            .trim()
            .toLowerCase()
            .isLength({
                min: 1,
                max: 6
            })
            .withMessage("id_utilisateur must be between 1 and 6 characters")
    ]
}

module.exports = reservationRules;
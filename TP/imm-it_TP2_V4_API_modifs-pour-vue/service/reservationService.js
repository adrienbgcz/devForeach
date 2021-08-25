const db = require("../utils/db");


const getReservations = async () => {

    let reservations = []
    try {
        // reservations = await reservations.findAll();
        const query = await db.query('SELECT * FROM reservation')
        reservations = query.rows;
    } catch (error) {
        console.error(error)
    }
    return reservations;
}

const getReservation = async (paramsId) => {
    let reservation = []
    try {
        // reservation = await reservation.findAll({ where: { id: paramsId } });
        const query = await db.query('SELECT * FROM reservation WHERE id = $1', [paramsId])
        reservation = query.rows;
    } catch (error) {
        console.error(error)
    }
    return reservation;
}




const createReservation = async (reservation) => {
    let reservations = []
    const numero_reservation = reservation.numero_reservation;
    const dateArrivee = reservation.date_arrivee;
    const dateDepart = reservation.date_depart;
    const idLogement = reservation.id_logement;
    const idUtilisateur = reservation.id_utilisateur;
    
    
    try {
        // await CentreVacances.create( {nom, cp, ville, num_voie : numVoie, libelle_voie : libelleVoie})
        await db.query('INSERT INTO reservation (numero_reservation, date_arrivee, date_depart, id_logement, id_utilisateur) VALUES ($1,$2,$3, $4, $5)', [numero_reservation, dateArrivee, dateDepart, idLogement, idUtilisateur]);
        reservations = await getReservations()
    } catch (error) {
        console.error(error)
    }
    return reservations;
}




const updateReservation = async (paramsId, reservation) => {
    let reservations = []
    const numeroReservation = reservation.numero_reservation;
    const dateArrivee = reservation.date_arrivee;
    const dateDepart = reservation.date_depart;
    const idLogement = reservation.id_logement;
    const idUtilisateur = reservation.id_utilisateur;
    
    try {
        // await CentreVacances.update({ nom }, { where: { id: paramsId } });
        await db.query('UPDATE reservation SET numero_reservation = $1 WHERE id = $2', [numeroReservation, paramsId]);
        await db.query('UPDATE reservation SET date_arrivee = $1 WHERE id = $2', [dateArrivee, paramsId]);
        await db.query('UPDATE reservation SET date_depart = $1 WHERE id = $2', [dateDepart, paramsId]);
        await db.query('UPDATE reservation SET id_logement = $1 WHERE id = $2', [idLogement, paramsId]);
        await db.query('UPDATE reservation SET id_utilisateur = $1 WHERE id = $2', [idUtilisateur, paramsId]);
        
        reservations = await getReservations()
    } catch (error) {
        console.error(error)
    }

    return reservations;
}


const deleteReservation = async (paramsId) => {
    let reservations = []
    try {
        // await CentreVacances.destroy({ where: { id: paramsId } });
        await db.query('DELETE FROM reservation WHERE id = $1', [paramsId])
        reservations = await getReservations()
    } catch (error) {
        console.error(error)
    }

    return reservations
}



module.exports = { getReservations, getReservation, createReservation, updateReservation, deleteReservation};
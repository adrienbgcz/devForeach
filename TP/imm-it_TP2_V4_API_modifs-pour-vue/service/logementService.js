 const { query } = require("../utils/db");
const db = require("../utils/db");


const getLogements = async () => {

    let logements = []
    try {
        const query = await db.query('SELECT * FROM logement')
        logements = query.rows;
    } catch (error) {
        console.error(error)
    }
    return logements;
}

const getLogement = async (paramsId) => {
    let logement = []
    try {
        const query = await db.query('SELECT * FROM logement WHERE id = $1', [paramsId])
        logement = query.rows;
    } catch (error) {
        console.error(error)
    }
    return logement;
}



const createLogement = async (logement) => {
    let logements = []
    const titre = logement.titre;
    const description = logement.description;
    const nombrePieces = logement.nombre_pieces;
    const nombreChambres = logement.nombre_chambres;
    const surfaceInterieure = logement.surface_interieure;
    const surfaceExterieure = logement.surface_exterieure;
    const animaux = logement.animaux;
    const idCentre = logement.id_centre;

    try {
        await db.query('INSERT INTO logement (titre, description, nombre_pieces, nombre_chambres, surface_interieure, surface_exterieure, animaux, id_centre) VALUES ($1,$2,$3,$4,$5,$6,$7,$8)', [titre, description, nombrePieces, nombreChambres, surfaceInterieure, surfaceExterieure, animaux, idCentre]);
        logements = await getLogements()
    } catch (error) {
        console.error(error)
    }
    return logements;
}


const updateLogement = async (paramsId, logement) => {
    let logements = []
    const titre = logement.titre;
    const description = logement.description;
    const nombrePieces = logement.nombre_pieces;
    const nombreChambres = logement.nombre_chambres;
    const surfaceInterieure = logement.surface_interieure;
    const surfaceExterieure = logement.surface_exterieure;
    const animaux = logement.animaux;
    const idCentre = logement.id_centre;
    try {
        await db.query('UPDATE logement SET titre = $1 WHERE id = $2', [titre, paramsId]);
        await db.query('UPDATE logement SET description = $1 WHERE id = $2', [description, paramsId]);
        await db.query('UPDATE logement SET nombre_pieces = $1 WHERE id = $2', [nombrePieces, paramsId]);
        await db.query('UPDATE logement SET nombre_chambres = $1 WHERE id = $2', [nombreChambres, paramsId]);
        await db.query('UPDATE logement SET surface_interieure = $1 WHERE id = $2', [surfaceInterieure, paramsId]);
        await db.query('UPDATE logement SET surface_exterieure = $1 WHERE id = $2', [surfaceExterieure, paramsId]);
        await db.query('UPDATE logement SET animaux = $1 WHERE id = $2', [animaux, paramsId]);
        await db.query('UPDATE logement SET id_centre = $1 WHERE id = $2', [idCentre, paramsId]);


        logements = await getLogements()
    } catch (error) {
        console.error(error)
    }

    return logements;
}


const deleteLogement = async (paramsId) => {
    let logements = []
    try {
        await db.query('DELETE FROM logement WHERE id = $1', [paramsId])
        logements = await getLogements()
    } catch (error) {
        console.error(error)
    }

    return logements
}


const getLogementsAlphabetique = async (limit) => {
    let logements = []
    let query = {}

    try {
        if (limit == 0) {
            query = await db.query('SELECT logement.titre FROM logement ORDER BY logement.titre')
        } else {
            query = await db.query('SELECT logement.titre FROM logement ORDER BY logement.titre LIMIT ' + limit)
        }
        logements = query.rows;

    } catch (error) {
        console.error(error);
    }

    return logements;
}




const getLogementsOrderedById = async (idLogement, limit) => {
    let logements = [];
    let query = {}
    try {
        if (limit == 0) {
            query = await db.query('SELECT logement.id, logement.titre FROM logement WHERE logement.id >= $1 ORDER BY logement.id', [idLogement])
        } else {
            query = await db.query('SELECT logement.id, logement.titre FROM logement WHERE logement.id >= $1 ORDER BY logement.id LIMIT ' + limit, [idLogement])
        }
        logements = query.rows
    } catch (error) {
        console.error(error)
    }
    return logements
}



const getLogementsOrderedByNote = async (limit) => {
    let logements = [];
    let query = {};
    try {
        if (limit == 0) {
            query = await db.query('SELECT logement.titre, round(avg(commentaire.note),1) as note_moyenne FROM logement JOIN avis ON logement.id = avis.id_logement JOIN commentaire ON avis.id_commentaire = commentaire.id GROUP BY logement.titre ORDER BY note_moyenne DESC')
        } else {
            query = await db.query('SELECT logement.titre, round(avg(commentaire.note),1) as note_moyenne FROM logement JOIN avis ON logement.id = avis.id_logement JOIN commentaire ON avis.id_commentaire = commentaire.id GROUP BY logement.titre ORDER BY note_moyenne DESC LIMIT ' + limit)
        }
        logements = query.rows

    } catch (error) {
        console.error(error)
    }
    return logements
}




const getLogementsOrderedByReservations = async (limit) => {
    let logements = []
    let query = {}
    try {
        if (limit == 0) {
            query = await db.query('SELECT logement.titre, count(reservation.id) as nombre_reservations FROM logement LEFT JOIN reservation ON logement.id = reservation.id_logement GROUP BY logement.titre ORDER BY nombre_reservations DESC')
        } else {
            query = await db.query('SELECT logement.titre, count(reservation.id) as nombre_reservations FROM logement LEFT JOIN reservation ON logement.id = reservation.id_logement GROUP BY logement.titre ORDER BY nombre_reservations DESC LIMIT ' + limit) 
        }
        logements = query.rows;
    } catch (error) {
        console.error(error);
    }

    return logements
}





// récupérer tous les logements d'un centre de vacances
const getLogementsByCentre = async (idCentre) => {
    let logements = []
    try {
        const query = await db.query('SELECT logement.titre, centre_vacances.id as id_centre, centre_vacances.nom as nom_centre, centre_vacances.ville as lieu_centre FROM logement JOIN centre_vacances ON logement.id_centre = centre_vacances.id WHERE centre_vacances.id = $1', [idCentre]);
        logements = query.rows;

    } catch (error) {
        console.error(error)
    }
    return logements
}




const getLogementsByEquipement = async (listeEquipements) => {

    let requete = 'SELECT logement.id AS id_logement, equipement.id AS id_equipement, logement.titre, equipement.nom_equipement FROM logement JOIN logement_equipement ON logement.id = logement_equipement.id_logement JOIN equipement ON logement_equipement.id_equipement = equipement.id'
    let logements = []
    let query = {}

    // http://localhost:9002/logements?equipement1=1&equipement2=2&equipement3=3&equipement4=4&equipement5=5&equipement6=6&equipement7=7&equipement8=8

    try {
        switch (listeEquipements.length) {
            case 1:
                query = await db.query(requete + ' WHERE equipement.id = $1', [listeEquipements[0]])
                break;
            case 2:
                query = await db.query(requete + ' WHERE equipement.id = $1 OR equipement.id = $2', [listeEquipements[0], listeEquipements[1]])
                break;
            case 3:
                query = await db.query(requete + ' WHERE equipement.id = $1 OR equipement.id = $2 OR equipement.id = $3', [listeEquipements[0], listeEquipements[1], listeEquipements[2]])
                break;
            case 4:
                query = await db.query(requete + ' WHERE equipement.id = $1 OR equipement.id = $2 OR equipement.id = $3 OR equipement.id = $4 ', [listeEquipements[0], listeEquipements[1], listeEquipements[2], listeEquipements[3]])
                break;
            case 5:
                query = await db.query(requete + ' WHERE equipement.id = $1 OR equipement.id = $2 OR equipement.id = $3 OR equipement.id = $4 OR equipement.id = $5 ', [listeEquipements[0], listeEquipements[1], listeEquipements[2], listeEquipements[3], listeEquipements[4]])
                break;
            case 6:
                query = await db.query(requete + ' WHERE equipement.id = $1 OR equipement.id = $2 OR equipement.id = $3 OR equipement.id = $4 OR equipement.id = $5 OR equipement.id = $6', [listeEquipements[0], listeEquipements[1], listeEquipements[2], listeEquipements[3], listeEquipements[4], listeEquipements[5]])
                break;
            case 7:
                query = await db.query(requete + ' WHERE equipement.id = $1 OR equipement.id = $2 OR equipement.id = $3 OR equipement.id = $4 OR equipement.id = $5 OR equipement.id = $6 OR equipement.id = $7', [listeEquipements[0], listeEquipements[1], listeEquipements[2], listeEquipements[3], listeEquipements[4], listeEquipements[5], listeEquipements[6]])
                break;
            case 8:
                query = await db.query(requete + ' WHERE equipement.id = $1 OR equipement.id = $2 OR equipement.id = $3 OR equipement.id = $4 OR equipement.id = $5 OR equipement.id = $6 OR equipement.id = $7 OR equipement.id = $8', [listeEquipements[0], listeEquipements[1], listeEquipements[2], listeEquipements[3], listeEquipements[4], listeEquipements[5], listeEquipements[6], listeEquipements[7]])
                break;

            default:
                break;
        }

        logements = query.rows

    } catch (error) {
        console.error(error);
    }


    // Créer un objet vide avec un tableau vide pour les équipements
    let newLogement = {
        id: 0,
        titre: '',
        equipements_selectionnes: []
    }

    let newEquipement = {
        id: 0,
        nom_equipement: ''
    }

    // Créer un tableau vide pour les logements filtrés
    let logementsCorrespondants = []


    // Parcourir les logements
    logements.forEach(logement => {
        // Si l'id du logement n'existe pas dans les logements filtrés, 
        // creer un nouveau logement et l'ajouter à la liste
        let exist = false;
        exist = isExist(logement.id_logement, logementsCorrespondants)
        if (!exist) {
            newLogement = {
                id: logement.id_logement,
                titre: logement.titre,
                equipements_selectionnes: [newEquipement = {
                    id: logement.id_equipement,
                    nom_equipement: logement.nom_equipement
                }
                ]
            }
            logementsCorrespondants.push(newLogement)

            // si l'id du logement existe déjà, ajouter l'équipement au logement existant
        } else {
            logementsCorrespondants.forEach(element => {
                if (element.id == logement.id_logement) {
                    newEquipement = {
                        id: logement.id_equipement,
                        nom_equipement: logement.nom_equipement
                    }
                    element.equipements_selectionnes.push(newEquipement)
                }
            });
        }
    });


    //////// On rajoute un filtre avec la liste des equipements demandés de base

    // on convertit la liste des équipements demandés en integer pour la comparaison avec includes
    let listeEquipementsToInt = listeEquipements.map(idEquipement => {
        return parseInt(idEquipement)
    })


    let i = 0
    let result = []

    // A chaque tour de boucle, met les id des logements récupérés par les requetes SQL dans un tableau
    let idEquipementsCorrespondants = []

    logementsCorrespondants.forEach(logement => {
        i = 0
        idEquipementsCorrespondants = []
        logement.equipements_selectionnes.forEach(equipement => {
            idEquipementsCorrespondants.push(equipement.id)
        })

        // on regarde si les id des logements récupérés sont inclus dans les logements souhaités et on incrémente un compteur
        listeEquipementsToInt.forEach(equipement => {
            if (idEquipementsCorrespondants.includes(equipement)) {
                i++
            }
        })

        // si le compteur correspond aux équipements souhaités, on ajoute le logement aux résultats à renvoyer
        if (i >= listeEquipementsToInt.length) {
            result.push(logement)
        }

    })
    return result;
}




const getLogementsParRegion = async (idRegion) => {
    let logements = []

    try {
        const query = await db.query('SELECT logement.titre, centre_vacances.nom, region.nom_region FROM logement JOIN centre_vacances ON logement.id_centre = centre_vacances.id JOIN region ON region.id = centre_vacances.id_region WHERE region.id = $1', [idRegion])
        logements = query.rows;
    } catch (error) {
        console.error(error);
    }
    return logements;
}


// http://localhost:9001/logements/dates?beginning=2021-04-24&end=2021-04-30
const getLogementsByDates = async (beginning, end) => {

    // On déclare un tableau de logements
    let logements = []
    try {
        //On vient récupérer toutes les réservations existantes quel que soit le logement, y compris les logements sans réservation
        const query = await db.query('SELECT logement.id, logement.titre, reservation.date_arrivee, reservation.date_depart FROM logement LEFT JOIN reservation ON logement.id = reservation.id_logement')
        logements = query.rows;
    } catch (error) {
        console.error(error);
    }

    // on déclare une date d'arrivée et une date de départ qu'on récupère des paramètres
    const choixArrivee = new Date(beginning);
    const choixDepart = new Date(end);


    // on créé un tableau contenant les logements non-disponibles aux dates choisies
    const logementsNonDispos = logements.filter(logement => {
        return !((choixArrivee < logement.date_arrivee && choixDepart < logement.date_arrivee) || (choixArrivee > logement.date_depart))
    });

    console.log('\nListe de toutes les réservations tous logements confondus :\n')
    console.log(logements)
    console.log('\nLogements non-dispos :\n')
    console.log(logementsNonDispos)

    // on créé un autre tableau avec les id de ces logements non-disponibles
    let idNonDispos = [];

    logementsNonDispos.forEach(logement => {
        idNonDispos.push(logement.id)
    });

    console.log('\nListe des ID non-disponibles :\n')
    console.log(idNonDispos)

    let logementsDispos = [];


    logements.forEach(logement => {
        // on repère dans le premier tableau les logements dont l'id est disponible
        if (!idNonDispos.includes(logement.id)) {
            // on vérifie si le logement n'existe pas déja dans les logements dispos pour éviter les doublons
            let exist = false
            exist = isExist(logement.id, logementsDispos)
            if (!exist) {
                // on insère le logement dans la liste des logements dispos
                logementsDispos.push(logement)
            }
        }
    })

    console.log(`\nVoici les logements disponibles à vos dates : \n`)

    logementsDispos.forEach(logement => {
        console.log(logement.titre);

    })
    // on retourne les logements dispos 
    return logementsDispos
}


function isExist(idLogement, logementsDispos) {
    let exist = false
    logementsDispos.forEach(element => {
        if (idLogement == element.id) {
            exist = true;
        }
    })
    return exist;
}



module.exports = { getLogements, getLogement, createLogement, updateLogement, deleteLogement, getLogementsAlphabetique, getLogementsOrderedById, getLogementsOrderedByNote, getLogementsOrderedByReservations, getLogementsByCentre, getLogementsByEquipement, getLogementsParRegion, getLogementsByDates };
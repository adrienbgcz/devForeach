const db = require("../utils/db");


const getCentresVacances = async () => {

    let centresVacances = []
    try {
        // centresVacances = await centresVacances.findAll();
        const query = await db.query('SELECT * FROM centre_vacances')
        centresVacances = query.rows;
    } catch (error) {
        console.error(error)
    }
    return centresVacances;
}

const getCentreVacances = async (paramsId) => {
    let centreVacances = []
    try {
        // centreVacances = await centreVacances.findAll({ where: { id: paramsId } });
        const query = await db.query('SELECT * FROM centre_vacances WHERE id = $1', [paramsId])
        centreVacances = query.rows;
    } catch (error) {
        console.error(error)
    }
    return centreVacances;
}




const createCentreVacances = async (centreVacances) => {
    let centresVacances = []
    const nom = centreVacances.nom;
    const cp = centreVacances.cp;
    const ville = centreVacances.ville;
    const numVoie = centreVacances.num_voie;
    const libelleVoie = centreVacances.libelle_voie;
    const idRegion = centreVacances.id_region;
    
    try {
        // await CentreVacances.create( {nom, cp, ville, num_voie : numVoie, libelle_voie : libelleVoie})
        await db.query('INSERT INTO centre_vacances (nom, cp, ville, num_voie, libelle_voie, id_region) VALUES ($1,$2,$3,$4,$5,$6)', [nom, cp, ville, numVoie, libelleVoie, idRegion]);
        centresVacances = await getCentresVacances()
    } catch (error) {
        console.error(error)
    }
    return centresVacances;
}




const updateCentreVacances = async (paramsId, centreVacances) => {
    let centresVacances = []
    const nom = centreVacances.nom;
    const cp = centreVacances.cp;
    const ville = centreVacances.ville;
    const numVoie = centreVacances.num_voie;
    const libelleVoie = centreVacances.libelle_voie;
    const idRegion = centreVacances.id_region;
    

    try {
        // await CentreVacances.update({ nom }, { where: { id: paramsId } });
        await db.query('UPDATE centre_vacances SET nom = $1 WHERE id = $2', [nom, paramsId]);
        await db.query('UPDATE centre_vacances SET cp = $1 WHERE id = $2', [cp, paramsId]);
        await db.query('UPDATE centre_vacances SET ville = $1 WHERE id = $2', [ville, paramsId]);
        await db.query('UPDATE centre_vacances SET num_voie = $1 WHERE id = $2', [numVoie, paramsId]);
        await db.query('UPDATE centre_vacances SET libelle_voie = $1 WHERE id = $2', [libelleVoie, paramsId]);
        await db.query('UPDATE centre_vacances SET id_region = $1 WHERE id = $2', [idRegion, paramsId]);
        
        
        centresVacances = await getCentresVacances()
    } catch (error) {
        console.error(error)
    }

    return centresVacances;
}


const deleteCentreVacances = async (paramsId) => {
    let centresVacances = []
    try {
        // await CentreVacances.destroy({ where: { id: paramsId } });
        await db.query('DELETE FROM centre_vacances WHERE id = $1', [paramsId])
        centresVacances = await getCentresVacances()
    } catch (error) {
        console.error(error)
    }

    return centresVacances
}






module.exports = { getCentresVacances, getCentreVacances, createCentreVacances, updateCentreVacances, deleteCentreVacances };
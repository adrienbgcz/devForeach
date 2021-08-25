const db = require("../utils/db");


const getEtiquettes = async () => {

    let etiquettes = []
    try {
        const query = await db.query('SELECT * FROM etiquette')
        etiquettes = query.rows;
    } catch (error) {
        console.error(error)
    }
    return etiquettes;
}


const getEtiquette = async (paramsId) => {
    let etiquette = []
    try {
        const query = await db.query('SELECT * FROM etiquette WHERE id = $1', [paramsId])
        etiquette = query.rows;
    } catch (error) {
        console.error(error)
    }
    return etiquette;
}

const createEtiquette = async (etiquette) => {
    let etiquettes = []
    const nomEtiquette = etiquette.nom;
    try {
        await db.query('INSERT INTO etiquette (nom) VALUES ($1)', [nomEtiquette]);
        etiquettes = await getEtiquettes()
    } catch (error) {
        console.error(error)
    }
    return etiquettes;
}


const updateEtiquette = async (paramsId, etiquette) => {
    let etiquettes = []
    const nomEtiquette = etiquette.nom;
    try {
        await db.query('UPDATE etiquette SET nom = $1 WHERE id = $2', [nomEtiquette, paramsId]);
        etiquettes = await getEtiquettes()
    } catch (error) {
        console.error(error)
    }
    return etiquettes;
}


const deleteEtiquette = async (paramsId) => {
    let etiquettes = []
    try {
        await db.query('DELETE FROM etiquette WHERE id = $1', [paramsId])
        etiquettes = await getEtiquettes()
    } catch (error) {
        console.error(error)
    }

    return etiquettes
}




module.exports = { getEtiquettes, getEtiquette, createEtiquette, updateEtiquette, deleteEtiquette};
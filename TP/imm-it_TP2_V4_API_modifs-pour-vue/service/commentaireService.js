const db = require("../utils/db");


const getCommentaires = async () => {

    let commentaires = []
    try {
        // commentaires = await commentaires.findAll();
        const query = await db.query('SELECT * FROM commentaire')
        commentaires = query.rows;
    } catch (error) {
        console.error(error)
    }
    return commentaires;
}

const getCommentaire = async (paramsId) => {
    let commentaire = []
    try {
        // commentaire = await commentaire.findAll({ where: { id: paramsId } });
        const query = await db.query('SELECT * FROM commentaire WHERE id = $1', [paramsId])
        commentaire = query.rows;
    } catch (error) {
        console.error(error)
    }
    return commentaire;
}




const createCommentaire = async (commentaire) => {
    let commentaires = []
    const dateCommentaire = commentaire.date_commentaire;
    const note = commentaire.note;
    const contenu = commentaire.contenu;
    
    
    try {
        // await CentreVacances.create( {nom, cp, ville, num_voie : numVoie, libelle_voie : libelleVoie})
        await db.query('INSERT INTO commentaire (date_commentaire, note, contenu) VALUES ($1,$2,$3)', [dateCommentaire, note, contenu]);
        commentaires = await getCommentaires()
    } catch (error) {
        console.error(error)
    }
    return commentaires;
}




const updateCommentaire = async (paramsId, commentaire) => {
    let commentaires = []
    const dateCommentaire = commentaire.date_commentaire;
    const note = commentaire.note;
    const contenu = commentaire.contenu;
    
    try {
        // await CentreVacances.update({ nom }, { where: { id: paramsId } });
        await db.query('UPDATE commentaire SET date_commentaire = $1 WHERE id = $2', [dateCommentaire, paramsId]);
        await db.query('UPDATE commentaire SET note = $1 WHERE id = $2', [note, paramsId]);
        await db.query('UPDATE commentaire SET contenu = $1 WHERE id = $2', [contenu, paramsId]);
        
        commentaires = await getCommentaires()
    } catch (error) {
        console.error(error)
    }

    return commentaires;
}


const deleteCommentaire = async (paramsId) => {
    let commentaires = []
    try {
        // await CentreVacances.destroy({ where: { id: paramsId } });
        await db.query('DELETE FROM commentaire WHERE id = $1', [paramsId])
        commentaires = await getCommentaires()
    } catch (error) {
        console.error(error)
    }

    return commentaires
}



module.exports = { getCommentaires, getCommentaire, createCommentaire, updateCommentaire, deleteCommentaire};
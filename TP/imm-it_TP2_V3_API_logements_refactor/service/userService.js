const db = require("../utils/db");


const getUsers = async () => {

    let users = []
    try {
        // users = await users.findAll();
        const query = await db.query('SELECT * FROM utilisateur')
        users = query.rows;
    } catch (error) {
        console.error(error)
    }
    return users;
}

const getUser = async (paramsId) => {
    let user = []
    try {
        // user = await user.findAll({ where: { id: paramsId } });
        const query = await db.query('SELECT * FROM utilisateur WHERE id = $1', [paramsId])
        user = query.rows;
    } catch (error) {
        console.error(error)
    }
    return user;
}




const createUser = async (user) => {
    let users = []
    const nom = user.nom;
    const prenom = user.prenom;
    const pseudo = user.pseudo;
    const numeroSalarie = user.numero_salarie;
    let newUserId = 0;
    
    try {
        
        // await CentreVacances.create( {nom, cp, ville, num_voie : numVoie, libelle_voie : libelleVoie})
        newUserId = await db.query('INSERT INTO utilisateur (nom, prenom, pseudo, numero_salarie) VALUES ($1,$2,$3,$4) RETURNING "id"', [nom, prenom, pseudo, numeroSalarie]);
        console.log(newUserId.rows[0].id)
        users = await getUsers()
    } catch (error) {
        console.error(error)
    }
    // return users;
        return newUserId.rows[0].id
}




const updateUser = async (paramsId, user) => {
    let users = []
    const nom = user.nom;
    const prenom = user.prenom;
    const pseudo = user.pseudo;
    const numeroSalarie = user.numero_salarie;
    

    try {
        // await CentreVacances.update({ nom }, { where: { id: paramsId } });
        await db.query('UPDATE utilisateur SET nom = $1 WHERE id = $2', [nom, paramsId]);
        await db.query('UPDATE utilisateur SET prenom = $1 WHERE id = $2', [prenom, paramsId]);
        await db.query('UPDATE utilisateur SET pseudo = $1 WHERE id = $2', [pseudo, paramsId]);
        await db.query('UPDATE utilisateur SET numero_salarie = $1 WHERE id = $2', [numeroSalarie, paramsId]);
        
        
        
        users = await getUsers()
    } catch (error) {
        console.error(error)
    }

    return users;
}


const deleteUser = async (paramsId) => {
    let users = []
    try {
        // await CentreVacances.destroy({ where: { id: paramsId } });
        await db.query('DELETE FROM utilisateur WHERE id = $1', [paramsId])
        users = await getUsers()
    } catch (error) {
        console.error(error)
    }

    return users
}






module.exports = { getUsers, getUser, createUser, updateUser, deleteUser };
// const videogames = require("../mock/videogames");
const db = require("../utils/db");


const getVideogames = async () => {

    let videogames = []
    try {
        const query = await db.query('SELECT * FROM videogame')
        videogames = query.rows;
    } catch (error) {
        console.error(error)
    }
    return videogames;
}





const getVideogame = async (paramsId) => {
    let videogame = []
    try {
        const query = await db.query('SELECT * FROM videogame WHERE id = $1', [paramsId])
        videogame = query.rows;
    } catch (error) {
        console.error(error)
    }
    return videogame;
}




const createVideogame = async (newVideogame) => {
    let videogames = []
    const newTitle = newVideogame.title;
    
    
    try {
        await db.query('INSERT INTO videogame (title) VALUES ($1)', [newTitle])
        videogames = await getVideogames()
    } catch (error) {
        console.error(error)
    }
    return videogames;
}




const updateVideogame = async (paramsId, updatedVideogame) => {
    let videogames = []
    const updatedTitle = updatedVideogame.title;
    try {
        await db.query('UPDATE videogame SET title = $1 WHERE id = $2', [updatedTitle, paramsId]);
        videogames = await getVideogames()
    } catch (error) {
        console.error(error)
    }
    return videogames;
}



const deleteVideogame = async (paramsId) => {
    let videogames = []
    try {
        await db.query('DELETE FROM videogame WHERE id = $1', [paramsId])
        videogames = await getVideogames()
    } catch (error) {
        console.error(error)
    }

    return videogames
}

module.exports = {getVideogames, getVideogame, createVideogame, updateVideogame, deleteVideogame};
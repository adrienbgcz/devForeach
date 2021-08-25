// const movies = require("../mock/movies");
const db = require("../utils/db");


const getMovies = async () => {

    let movies = []
    try {
        const query = await db.query('SELECT * FROM movie')
        movies = query.rows;
    } catch (error) {
        console.error(error)
    }
    return movies;
}





const getMovie = async (paramsId) => {
    let movie = []
    try {
        const query = await db.query('SELECT * FROM movie WHERE id = $1', [paramsId])
        movie = query.rows;
    } catch (error) {
        console.error(error)
    }
    return movie;
}




const createMovie = async (newMovie) => {
    let movies = []
    const newTitle = newMovie.title;
    
    
    try {
        await db.query('INSERT INTO movie (title) VALUES ($1)', [newTitle])
        movies = await getMovies()
    } catch (error) {
        console.error(error)
    }
    return movies;
}




const updateMovie = async (paramsId, updatedMovie) => {
    let movies = []
    const updatedTitle = updatedMovie.title;
    try {
        await db.query('UPDATE movie SET title = $1 WHERE id = $2', [updatedTitle, paramsId]);
        movies = await getMovies()
    } catch (error) {
        console.error(error)
    }
    return movies;
}



const deleteMovie = async (paramsId) => {
    let movies = []
    try {
        await db.query('DELETE FROM movie WHERE id = $1', [paramsId])
        movies = await getMovies()
    } catch (error) {
        console.error(error)
    }

    return movies
}

module.exports = {getMovies, getMovie, createMovie, updateMovie, deleteMovie};
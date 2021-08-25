const movies = require("../mock/movies");



const getMovies = () => {
    return movies;
}


const getMovie = (paramsId) => {
    const movie = movies.filter((movie) => movie.id === paramsId);
    return movie;  
}


const createMovie = (newMovie) => {
    let moviesCopy = [...movies];
    moviesCopy.push({ id: movies.length + 1, ...newMovie });
  return moviesCopy;
}


const updateMovie = (paramsId, updatedLibrary) => {
    movies.forEach((movie, index) => {
        if (movie.id == paramsId) movies[index] = { id: movie.id, ...updatedLibrary };
      });
      return true;
}


const deleteMovie = (paramsId) => {
    movies.forEach((movie, index) => {
        if (movie.id == paramsId) movies.splice(index, 1);
      });
      return movies
}

module.exports = {getMovies, getMovie, createMovie, updateMovie, deleteMovie};
const videogames = require("../mock/videogames");



const getVideogames = () => {
    return videogames;
}


const getVideogame = (paramsId) => {
    const videogame = videogames.filter((videogame) => videogame.id === paramsId);
    return videogame;  
}


const createVideogame = (newMovie) => {
    let moviesCopy = [...videogames];
    moviesCopy.push({ id: videogames.length + 1, ...newMovie });
  return moviesCopy;
}


const updateVideogame = (paramsId, updatedLibrary) => {
    videogames.forEach((videogame, index) => {
        if (videogame.id == paramsId) videogames[index] = { id: videogame.id, ...updatedLibrary };
      });
      return true;
}


const deleteVideogame = (paramsId) => {
    videogames.forEach((videogame, index) => {
        if (videogame.id == paramsId) videogames.splice(index, 1);
      });
      return videogames
}

module.exports = {getVideogames, getVideogame, createVideogame, updateVideogame, deleteVideogame};
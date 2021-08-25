const libraries = require("../mock/libraries");


const getLibraries = () => {
    return libraries;
}


const getLibrary = (paramsId) => {
    const library = libraries.filter((library) => library.id === paramsId);
    return library;  
}


const createLibrary = (newLibrary) => {
    let librariesCopy = [...libraries];
    librariesCopy.push({ id: libraries.length + 1, ...newLibrary });
  return librariesCopy;
}


const updateLibrary = (paramsId, updatedLibrary) => {
    libraries.forEach((library, index) => {
        if (library.id == paramsId) libraries[index] = { id: library.id, ...updatedLibrary };
      });
      return true;
}


const deleteLibrary = (paramsId) => {
    libraries.forEach((library, index) => {
        if (library.id == paramsId) libraries.splice(index, 1);
      });
      return libraries
}

module.exports = {getLibraries, getLibrary, createLibrary, updateLibrary, deleteLibrary};
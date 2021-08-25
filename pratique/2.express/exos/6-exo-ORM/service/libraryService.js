// const libraries = require("../mock/libraries");
const db = require("../utils/db");
const Library = require("../utils/sequelize/models/Library");




const getLibraries = async () => {

    let libraries = []
    try {
        libraries = await Library.findAll()
        // const query = await db.query('SELECT * FROM library')
        // libraries = query.rows;
    } catch (error) {
        console.error(error)
    }
    return libraries;
}





const getLibrary = async (paramsId) => {
    let library = []
    try {
        library = Library.findAll({ where: { id: paramsId } })
        // const query = await db.query('SELECT * FROM library WHERE id = $1', [paramsId])
        // library = query.rows;
    } catch (error) {
        console.error(error)
    }
    return library;
}




const createLibrary = async (newLibrary) => {
    let libraries = []
    const newName = newLibrary.name;
    const newPersonId = newLibrary.person_id;

    try {
        await Library.create({ name : newName, person_id : newPersonId });
        // await db.query('INSERT INTO library (name, person_id) VALUES ($1, $2)', [newName, newPersonId])
        libraries = await getLibraries()
    } catch (error) {
        console.error(error)
    }
    return libraries;
}




const updateLibrary = async (paramsId, updatedLibrary) => {
    let libraries = []
    const updatedName = updatedLibrary.name;
    try {
        await Library.update({ name : updatedName }, { where: { id: paramsId } });
        // await db.query('UPDATE library SET name = $1 WHERE id = $2', [updatedName, paramsId]);
        libraries = await getLibraries()
    } catch (error) {
        console.error(error)
    }
    return libraries;
}



const deleteLibrary = async (paramsId) => {
    let libraries = []
    try {
        await Library.destroy({ where: { id: paramsId } })
        // await db.query('DELETE FROM library WHERE id = $1', [paramsId])
        libraries = await getLibraries()
    } catch (error) {
        console.error(error)
    }

    return libraries
}




// const updateLibraryWithBook = async (libraryId, bookId) => {
//     try {
//         await db.query('INSERT INTO library_media (library_id, book_id) VALUES ($1, $2)', [libraryId, bookId])
//         console.log('ici');
//     } catch (error) {
//         console.error(error)
//     }
// }

module.exports = { getLibraries, getLibrary, createLibrary, updateLibrary, deleteLibrary };
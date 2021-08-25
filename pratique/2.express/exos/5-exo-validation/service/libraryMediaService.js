const db = require("../utils/db");



const addMedia = async (libraryId, mediaId, mediaType) => {

    if (mediaType == 'book') {

        try {
            await db.query('INSERT INTO library_media (library_id, book_id) VALUES ($1, $2)', [libraryId, mediaId])
            console.log('ici');
        } catch (error) {
            console.error(error)
        }
    }
}







// const getAllMediasOfLibrary = async (libraryId, bookId, movieId, videogameId) => {
//     const allMedias = await db.query('SELECT book.title, library.name, ')
// }


module.exports = { addMedia }
// const users = require("../mock/users");
// const userLibraries = require('../mock/userLibraries');

const db = require('../utils/db')


const getUsers = async () => {
    let users = [];
    try {
        const query = await db.query('SELECT * FROM person')
        users = query.rows;
    } catch (error) {
        console.error(error)
    }
    return users;
}


const getUser = async (userId) => {
    let user = [];
    try {
        const query = await db.query('SELECT * FROM person WHERE id = $1', [userId]);
        user = query.rows;
    } catch (error) {
        console.error(error);
    }
    return user;
}


const createUser = async (newUser) => {
    const newUsername = newUser.name
    let users = []
    try {
        await db.query ("INSERT INTO person (name) VALUES ($1)", [newUsername])
        users = await getUsers()
    } catch (error) {
        console.error(error)
    }
    return users;
}


const updateUser = async (paramsId, updatedUser) => {
    const username = updatedUser.name
    let user = [];
    try {
        await db.query('UPDATE person SET name = $1 WHERE id = $2', [username, paramsId])
        user = await getUser(paramsId)
    } catch (error) {
        console.error(error)
    }
    
    return user;
}


const deleteUser = async (paramsId) => {
    let users = [];
    try {
        await db.query('DELETE FROM person WHERE id = $1', [paramsId])
        users = await getUsers()
    } catch (error) {
        console.error(error)
    }
    return users
}


/////////////////////////////////////////////////////////////////////////
const getLibrariesOfUser = (userId) => {
    const user = userLibraries.filter(user => user.id == userId)
    const libraries = user[0].libraries
    return libraries
}


const getLibraryOfUser = (userId, libraryId) => {
    const chosenUser = userLibraries.filter(user => user.id == userId)
    const libraries = chosenUser[0].libraries;
    const chosenLibrary = libraries.filter(library => library.id == libraryId)
    return chosenLibrary
}


const getBooksOfLibrabryOfUser = (userId, libraryId) => {
    const chosenUser = userLibraries.filter(user => user.id == userId);
    const chosenLibrary = chosenUser[0].libraries.filter(library => library.id == libraryId)
    return chosenLibrary
}


const getBookOfLibraryOfUser = (userId, libraryId, bookId) => {
    const chosenUser = userLibraries.filter(user => user.id == userId);
    const chosenLibrary = chosenUser[0].libraries.filter(library => library.id == libraryId)
    const chosenBook = chosenLibrary[0].books.filter(book => book.id == bookId)
    return chosenBook
}


const createNewLibraryForUser = (userId, newLibrary) => {
    const chosenUser = userLibraries.filter(user => user.id == userId);
    chosenUser[0].libraries.push(newLibrary);
    return chosenUser
}



const updateLibraryOfUser = (userId, libraryId, updatedLibrary) => {
    const userLibrariesUpdated = userLibraries.map(user => {
        if (user.id == userId) {
            for (let i = 0; i < user.libraries.length; i++) {
                if (user.libraries[i].id == libraryId) {
                    user.libraries[i] = updatedLibrary;
                    console.log('là');
                }
            }
        }
    });
    return userLibrariesUpdated


    // const user = userLibraries.find(user => user.id == userId)
    // const libraries = user.libraries.find(library => library.id == libraryId)
    // DB : UPDATE library SET name = updatedLibrary.name WHERE id = libraryID 

}
// const getBooksOfLibraryOfUser = ()




const deleteLibraryOfUser = (userId, libraryId) => {
    userLibraries.forEach(user => {
        if (user.id = userId) {
            for (let i = 0; i < user.libraries.length; i++) {
                if (user.libraries[i].id == libraryId) {
                    user.libraries.splice(i, 1);
                }
            }
        }
    })
}


module.exports = { getUsers, getUser, createUser, updateUser, deleteUser, getLibrariesOfUser, getLibraryOfUser, getBooksOfLibrabryOfUser, getBookOfLibraryOfUser, createNewLibraryForUser, updateLibraryOfUser, deleteLibraryOfUser };
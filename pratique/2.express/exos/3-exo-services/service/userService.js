const users = require("../mock/users");
const userLibraries = require('../mock/userLibraries');


const getUsers = () => {
    // SELECT * FROM users
    return users;
}


const getUser = (paramsId) => {
    const user = users.filter((user) => user.id === paramsId);
    // SELECT * FROM  user WHERE id = paramsId
    return user;
}


const createUser = (newUser) => {
    let usersCopy = [...users];
    usersCopy.push({ id: users.length + 1, ...newUser });
    return usersCopy;
}


const updateUser = (paramsId, updateUser) => {
    users.forEach((user, index) => {
        if (user.id == paramsId) users[index] = { id: user.id, ...updateUser };
    });
    return true;

}


const deleteUser = (paramsId) => {
    users.forEach((user, index) => {
        if (user.id == paramsId) users.splice(index, 1);
    });
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
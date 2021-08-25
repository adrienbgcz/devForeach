const express = require("express");
const router = express.Router();
const users = require("../mock/users");

const userServices = require('../service/userService');
const userLibraries = require('../mock/userLibraries');

const { route } = require("./libraryRouter");
const libraries = require("../mock/libraries");


router.get("/", (req, res) => {
  const users = userServices.getUsers();
  res.json(users);
});

router.get("/:id", (req, res) => {
  const paramsId = parseInt(req.params.id)
  const user = userServices.getUser(paramsId);
  res.json(user);
});

router.post("/", (req, res) => {
  const { newUser } = req.body;
  const createdUser = userServices.createUser(newUser)
  res.json(createdUser);
});

router.put("/:id", (req, res) => {
  const { updateUser } = req.body;
  const paramsId = parseInt(req.params.id);
  const updatedUser = userServices.updateUser(paramsId, updateUser)
  res.json(users);
});

router.delete("/:id", (req, res) => {
  const paramsId = parseInt(req.params.id);
  const deletedUser = userServices.deleteUser(paramsId)
  res.json(users);
});


// récupérer les librairies d'un utilisateur
router.get('/:id/libraries', (req, res) => {
  const userId = req.params.id;
  const libraries = userServices.getLibrariesOfUser(userId);
  res.json(libraries);
})


// récupérer une librairie d'un utilisateur
router.get('/:userId/libraries/:libraryId', (req, res) => {
  const userId = req.params.userId;
  const libraryId = req.params.libraryId;
  const chosenLibrary = userServices.getLibraryOfUser(userId, libraryId)

  res.json(chosenLibrary)

})

// récupérer tous les livres d'une librairie d'un utilisateur

router.get('/:userId/libraries/:libraryId/books', (req, res) => {
  const userId = req.params.userId;
  const libraryId = req.params.libraryId;

  const chosenLibrary = userServices.getLibraryOfUser(userId, libraryId)

  res.json(chosenLibrary[0].books)

});

// récupérer un livre d'une librairie d'un utilisateur
router.get('/:userId/libraries/:libraryId/book/:bookId', (req, res) => {
  const userId = req.params.userId;
  const libraryId = req.params.libraryId;
  const bookId = req.params.bookId;

  const chosenBook = userServices.getBookOfLibraryOfUser(userId, libraryId, bookId)
  res.json(chosenBook[0])

});


// créer une nouvelle librairie pour 1 utilisateur

router.post('/:userId/libraries', (req, res) => {

  const userId = req.params.userId;
  const newLibrary = req.body.newLibrary;
  const chosenUser = userServices.createNewLibraryForUser(userId, newLibrary)
  res.json(chosenUser[0].libraries);

});

module.exports = router;



// mettre à jour une librairie pour un utilisateur

router.put('/:userId/libraries/:libraryId', (req, res) => {

  const userId = req.params.userId;
  const libraryId = req.params.libraryId;
  const updatedLibrary = req.body.updatedLibrary

  const chosenUser = userLibraries.find(user => user.id == userId);
  const libraryToUpdate = chosenUser.libraries.find(library => library.id == libraryId);
  // comment mettre à jour userLibraries avec cette méthode ?

//const library =  userServices.updateLibraryOfUser(userId, libraryId, updatedLibrary)
  
  // userLibraries.forEach(user => {
  //   if (user.id == userId) {
  //     for (let i = 0; i < user.libraries.length; i++) {
  //       if (user.libraries[i].id == libraryId) {
  //         user.libraries[i] = updatedLibrary;
  //       }
  //     }
  //   }
  // });
  // res.json(library);
  // console.log('ici');

});



// supprimer une librairie d'un utilisateur

router.delete('/:userId/libraries/:libraryId', (req, res) => {

  const userId = req.params.userId;
  const libraryId = req.params.libraryId;
  const libraryToDelete = userServices.deleteLibraryOfUser(userId, libraryId)

  
  res.json(userLibraries);

});
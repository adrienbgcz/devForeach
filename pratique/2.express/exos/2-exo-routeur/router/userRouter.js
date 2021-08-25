const express = require("express");
const router = express.Router();
const users = require("../mock/users");
const userLibraries = require('../mock/userLibraries');
const { route } = require("./libraryRouter");
const libraries = require("../mock/libraries");


router.get("/", (req, res) => {
  res.json(users);
});

router.get("/:id", (req, res) => {
  const paramsId = parseInt(req.params.id);
  const user = users.filter((user) => user.id === paramsId);
  res.json(user);
});

router.post("/", (req, res) => {
  const { newUser } = req.body;
  let usersCopy = [...users];
  usersCopy.push({ id: users.length + 1, ...newUser });
  res.json(usersCopy);
});

router.put("/:id", (req, res) => {
  const { updateUser } = req.body;
  const paramsId = parseInt(req.params.id);
  users.forEach((user, index) => {
    if (user.id == paramsId) users[index] = { id: user.id, ...updateUser };
  });
  res.json(users);
});

router.delete("/:id", (req, res) => {
  const paramsId = parseInt(req.params.id);
  users.forEach((user, index) => {
    if (user.id == paramsId) users.splice(index, 1);
  });
  res.json(users);
});



router.get('/:id/libraries', (req,res) => {
  const userId = req.params.id
  const user = userLibraries.filter(user => user.id == userId)
  console.log(user)
  const libraries = user[0].libraries // [0] en dur car ce sera toujours un tableau à une entrée avec le filter
  console.log(libraries)
  res.json(libraries)
})


router.get('/:userId/libraries/:libraryId', (req, res) => {
  const userId = req.params.userId;
  const libraryId = req.params.libraryId;
  const chosenUser = userLibraries.filter(user => user.id == userId)
  
  console.log('\nUtilisateur choisi : \n')
  console.log(chosenUser)
  console.log('\n')

  const libraries = chosenUser[0].libraries;
  const chosenLibrary = libraries.filter(library => library.id == libraryId)

  console.log(`\nLibrairies de cet utilisateur : \n`)
  console.log(libraries)
  console.log('\nLibrairies choisies :\n')
  console.log(chosenLibrary)
  console.log('\n\n')


  res.json(chosenLibrary)

})

// récupérer tous les livres d'une librairie d'un utilisateur
router.get('/:userId/libraries/:libraryId/books', (req, res) => {
const userId = req.params.userId;
const libraryId = req.params.libraryId;

const chosenUser = userLibraries.filter(user => user.id == userId);
console.log(chosenUser)

const chosenLibrary = chosenUser[0].libraries.filter(library => library.id == libraryId)
console.log(chosenLibrary[0].books)

res.json(chosenLibrary[0].books)

});

// récupérer un livre d'une librairie d'un utilisateur
router.get('/:userId/libraries/:libraryId/book/:bookId', (req, res) => {
const userId = req.params.userId;
const libraryId = req.params.libraryId;
const bookId = req.params.bookId;

const chosenUser = userLibraries.filter(user => user.id == userId);


const chosenLibrary = chosenUser[0].libraries.filter(library => library.id == libraryId)
const chosenBook = chosenLibrary[0].books.filter(book => book.id == bookId)

console.log(chosenLibrary[0].books)

res.json(chosenBook[0])

});


// créer une nouvelle librairie pour 1 utilisateur

router.post('/:userId/libraries', (req, res) => {

const userId = req.params.userId;

const newLibrary = req.body.newLibrary;

const chosenUser = userLibraries.filter(user => user.id == userId);

console.log(chosenUser);
chosenUser[0].libraries.push(newLibrary);

res.json(chosenUser[0].libraries);

});

module.exports = router;



// mettre à jour une librairie pour un utilisateur

router.put('/:userId/library/:libraryId', (req, res) => {

  const userId = req.params.userId;
  const libraryId = req.params.libraryId;

userLibraries.forEach(user => {
  if (user.id = userId) {
    for(let i = 0; i < user.libraries.length; i++) {
      if (user.libraries[i].id == libraryId){
        user.libraries[i] = req.body.updatedLibrary;        // à simplifier, c'est un copier coller du dessous
      }
    }
  }
});
res.json(userLibraries);

});



// supprimer une librairie d'un utilisateur

router.delete('/:userId/library/:libraryId', (req, res) => {

  const userId = req.params.userId;
  const libraryId = req.params.libraryId;

  const chosenUser = userLibraries.filter(user => user.id == userId);
console.log(chosenUser);

let chosenLibrary = chosenUser[0].libraries.filter(library => library.id == libraryId)
console.log(chosenLibrary);

//res.json(userLibraries);

userLibraries.forEach(user => {
  if (user.id = userId) {
    for(let i = 0; i < user.libraries.length; i++) {
      if (user.libraries[i].id == libraryId){
        user.libraries.splice(i, 1);
      }
    }
  }
})

res.json(userLibraries);

});
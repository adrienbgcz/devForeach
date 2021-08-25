const express = require('express');
const app = express();

const port = 9001;

app.use(express.json());


const users = [
    {
        id: 1,
        name: "Aurore"
    },
    {
        id: 2,
        name: "Thibaut"
    }
];

const libraries = [
    {
        id: 1,
        name: "Ma collection Fantastique",
        person_id: 1
    },
    {
        id: 2,
        name: "Ma collection Comédie",
        person_id: 2
    }
];

const movies = [
    {
        id: 1,
        title: "La communauté de l'anneau",
        director: "P.Jackson",
        year: "2001"
    },
    {
        id: 2,
        title: "Les deux tours",
        director: "P.Jackson",
        year: "2003"
    },
    {
        id: 3,
        title: "Le retour du roi",
        director: "P.jackson",
        year: "2005"
    }
];

const videogames = [
    {
        id: 1,
        title: "Mario Bros",
        producer: "Nintendo",
        year: "1885"
    },
    {
        id: 2,
        title: "Sonic",
        producer: "Sega",
        year: "1988"
    },
    {
        id: 3,
        title: "Street Fighter",
        producer: "Capcom",
        year: "1995"
    }
];

const books = [
    {
        id: 1,
        title: "Le seigneur des anneaux",
        author: "J.R.R Tolkien",
        year: "1972"
    },
    {
        id: 2,
        title: "Les promesses de l'aube",
        author: "R.Gary",
        year: "1986"
    },
    {
        id: 3,
        title: "Le livre des leurres",
        author: "E.Cioran",
        year: "1967"
    }
];

const userLibraries = [
    {
        id: 1,
        user: "Thibaut",
        libraries: [
            {
                id: 1,
                name: "Mes médias science-fiction"
            },
            {
                id: 2,
                name: "Mes médias comédie"
            }
        ]
    },
    {
        id: 2,
        user: "Aurore",
        libraries: [
            {
                id: 3,
                name: "Mes médias manga"
            },
            {
                id: 4,
                name: "Mes médias drame norvégien des années 30 "
            }
        ]
    }
];




// USERS
///////////////////////////////////////////////////////////////////////////////////
// 1. Lire tous les utilisateurs

// app.get('/users', (req, res) => {
//       res.json(users);
// });




//2. Lire un seul utilisateur en fonction de son id
// app.get('/users', (req, res) => {
// const user = users.filter(user => user.id == req.query.id);
// res.json(user);
// });


// app.get('/users/:id', (req, res) => {
//     const user = users.filter(user => user.id == req.params.id);
//     res.json(user);
//     });




// 3. Créer un utilisateur puis lire tous les utilisateurs
// app.post('/users', (req, res) => {
//     users.push(req.body.newUser);
//     res.json(users); // pourquoi on peut lire avec cette ligne alors qu'on est dans un post ?
// });



//4. Mettre à jour un utilisateur puis lire tous les utilisateurs
// app.put('/users/:id', (req, res) => {
//     const { id } = req.params;
//     const { updatedUser } = req.body;
//     //res.send('Le nom a bien été mis à jour'); // ATTENTION : ne pas mettre 2 res
//     console.log(id)
//     res.json(updatedUser)
//     //res.send(users);
// })

//5. Supprimer un utilisateur en fonction de son id puis lire tous les utilisateurs
// app.delete('/users/:id', (req, res) => {
//     const { id } = req.params;
//     //res.send(`suppression de l'utilisateur avec l\'id ${id}`);
//     res.json(id);
//     console.log(`Suppression de l'utilisateur avec l'id ${id}`)
// })






// LIBRARIES
///////////////////////////////////////////////////////////////////////////////////

// 7. Lire toutes les librairies
// app.get('/libraries', (req, res) => {
//     res.json(libraries);
// })


// 8. Lire une seule librairie en fonction de son id
// app.get('/libraries/:id', (req, res) => {
//     const result = libraries.filter(librarie => librarie.id == req.params.id);
//     res.json(result);
// })



// 9. Créer une librairie puis lire toutes les librairies
// app.post('/libraries', (req, res) => {
//     const newLibrary = req.body.newLibrary;
//     const id = req.body.newLibrary.id;
//     libraries.push(newLibrary);
//     res.json(libraries);
//     console.log(`La librairie avec l'id ${id} a été créée`);
// })


// 10. Mettre à jour une librairie puis lire toutes les librairies
// app.put('/libraries/:id', (req, res) => {
//     const { updatedLibrary } = req.body;
//     const { id } = req.params;
//     res.json(libraries);
//     console.log(`La librairie avec l'id ${id} a été mise à jour`);
// })


// 11. Supprimer une libraririe en fonction de son id puis lire toutes les librairie

// app.delete('/libraries/:id', (req, res) => {
//     const { id } = req.params;
//     res.json(libraries);
//     console.log(`La librairie avec l'id ${id} a été supprimée avec succès`)

// })

// BOOKS
///////////////////////////////////////////////////////////////////////////

// 12. Lire tous les livres
// app.get('/books', (req, res) => {
//     res.json(books);
// })


// 13. Lire un seul livre en fonction de son id
// app.get('/books/:id', (req, res) => {
//     const {id} = req.params
//     const result = books.filter(book => book.id == req.params.id)
//     res.json(result)
//     console.log(`Vous avez sélectionné le livre avec l'id ${id}`)
// })


// 14. Créer un livre puis lire toutes les livres
// app.post('/books', (req, res) => {
//     const newBook = req.body.newBook;
//     const id = req.body.newBook.id;
//     libraries.push(newBook);
//     res.json(books);
//     console.log(`Le livre avec l'id ${id} a été créé`);
//  })



// 15. Mettre à jour un livre puis lire toutes les livres
// app.put('/books/:id', (req, res) => {
//     const {id} = req.params;
//     const {updatedBook} = req.body;
//     res.json(books)
//     console.log(`Le livre ${id} a été mis à jour`)

// })


// 16. Supprimer un livre en fonction de son id puis lire toutes les livres

// app.delete('/books/:id', (req, res) => {
//     const { id } = req.params;
//     res.json(books);
//     console.log(`Le livre ${id} a été supprimé`)

// })



// MOVIES
////////////////////////////////////////////////////////////////////////

// 17. Lire tous les films
// app.get('/movies', (req, res) => {
//     res.json(movies);
// })


// 18. Lire un seul film en fonction de son id
// app.get('/movies/:id', (req, res) => {
//     const {id} = req.params
//     const result = movies.filter(movie => movie.id == req.params.id)
//     res.json(result)
//     console.log(`Vous avez sélectionné le film avec l'id ${id}`)
// })



// 19. Créer un film puis lire toutes les films
// app.post('/movies', (req, res) => {
//     const {newMovie} = req.body;
//     const {id} = req.body.newMovie;
//     libraries.push(newMovie);
//     res.json(movies);
//     console.log(`Le film avec l'id ${id} a été créé`);
//  })




// 20. Mettre à jour un film puis lire toutes les films

// app.put('/movies/:id', (req, res) => {
//     const {id} = req.params;
//     const {updatedMovie} = req.body;
//     res.json(movies);
//     console.log(`Le film ${id} a été mis à jour`)

// })




// 21. Supprimer un film en fonction de son id puis lire toutes les films

// app.delete('/movies/:id', (req, res) => {
//     const { id } = req.params;
//     res.json(movies);
//     console.log(`Le film ${id} a été supprimé`)
// })




// VIDEOS GAMES
///////////////////////////////////////////////////////////////////////////
// 22. Lire tous les jeux-vidéos
// app.get('/videogames', (req, res) => {
//     res.json(videogames);
// })


// 23. Lire un seul jeu-vidéo en fonction de son id

// app.get('/videogames/:id', (req, res) => {
//     const { id } = req.params
//     const result = videogames.filter(videogame => videogame.id == req.params.id)
//     res.json(result)
//     console.log(`Vous avez choisi le jeu ${id}`)
// })


// 24. Créer un jeu-vidéo puis lire tous les jeux-vidéos

// app.post('/videogames', (req, res) => {
//     const {newVideogame} = req.body;
//     videogames.push(newVideogame)
//     res.json(videogames)
//     console.log(`Vous avez ajouté un nouveau jeu`)
// })



// 25. Mettre à jour un jeu-vidéo puis lire tous les jeux-vidéos

// app.put('/videogames/:id', (req, res) => {
//     const {id} = req.params;
//     const {updatedVideogame} = req.body;
//     res.json(videogames)
//     console.log(`Le film ${id} a été mis à jour`)

// })



// 26. Supprimer un jeu-vidéo en fonction de son id puis lire tous les jeux-vidéos

// app.delete('/videogames/:id', (req, res) => {
//     const { id } = req.params;
//     res.json(videogames);
//     console.log(`Le jeu ${id} a été supprimé`);
// })




// 1. Déclarer un contrôleur qui permet de lire et de renvoyer comme réponse la 
// librairie d'un utilisateur avec comme identifiants l'id de cet utilisateur
app.get("/users/:id/libraries", (req, res) => {
    const userId = req.params.id
    const user = userLibraries.filter(user => user.id == userId)
    console.log(user)
    const libraries = user[0].libraries // [0] en dur car ce sera toujours un tableau à une entrée avec le filter
    console.log(libraries)
    res.json(libraries)

//     //   res.json(allLibrariesFromAUser)


//     // console.log(userLibraries[0].libraries)

//     // const user = userLibraries[0]
//     // console.log(user)
//     // console.log(user.libraries)
})


// 2. Récupérer une librairie d'un utilisateur
app.get("/users/:userId/libraries/:libraryId", (req, res) => {
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

});








app.listen(port, () => console.log(`app running on port ${port}\n`));
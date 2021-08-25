const express = require("express")
const app = express();
const PORT = 9000;


app.use(express.json());

const books = [
    {
        id: 1,
        title: 'Le seigneur des anneaux',
        author: 'J.R.R Tolkien',
        year: '1978'
    },
    {
        id: 2,
        title: 'Le Javascript pour les nuls',
        author: 'Aurore',
        year: '2021'
    }
];

app.get('/', (req, res) => {   // si requete get sur ce chemin (racine du serveur, = http://localhost:9000) elle va déclencher cette fonction
    // console.log(req);
    //res.send('Hello World');
    res.json({
        title: 'Hello World'
    })
})

// app.get('/books', (req, res) => {
//     const books = [
//         {
//             id: 1,
//             title: 'Le seigneur des anneaux',
//             author: 'J.R.R Tolkien',
//             year: '1978'
//         },
//         {
//             id: 2,
//             title: 'Le Javascript pour les nuls',
//             author: 'Aurore',
//             year: '2021'
//         }
//     ];
//     res.json(books);
// });


// app.get('/books', (req, res) => {

//     const books = [
//         {
//             id: 1,
//             title: 'Le seigneur des anneaux',
//             author: 'J.R.R Tolkien',
//             year: '1978'
//         },
//         {
//             id: 2,
//             title: 'Le Javascript pour les nuls',
//             author: 'Aurore',
//             year: '2021'
//         }
//     ];
//     const book = books.filter((book) => book.id == req.query.id);
//     res.json(book);
// });

// app.get('/books/:id', (req, res) => {
//     const books = [
//         {
//             id: 1,
//             title: 'Le seigneur des anneaux',
//             author: 'J.R.R Tolkien',
//             year: '1978'
//         },
//         {
//             id: 2,
//             title: 'Le Javascript pour les nuls',
//             author: 'Aurore',
//             year: '2021'
//         }
//     ];
//     const book = books.filter((book) => book.id == req.params.id);
//     // res.end() -- quand on veut arrêter la requete
//     res.json(book);
// })


app.post('/books', (req, res) => {
    //console.log(req.body.newBook);
    books.push(req.body.newBook); // mettre le newBook dans postman body/raw/json
    res.json(books);
});


app.put('/books/:id', (req, res) => {
    // const updatedBook = req.body.updatedBook;
    const { id } = req.params;
    const { updatedBook } = req.body; // égal syntaxe du dessus
    res.send('mise à jour d\'un livre');
    //DB : UPDATE books SET title = updatedBook.title WHERE id = 1;
    res.send(books)
})


app.delete('/books/:id', (req, res) => {
    const {id} = req.params;
    res.send(`suppression du livre avec l\'id ${id}`);
    // DB : DELETE FROM book WHERE id = id 
    // res.send(books);
})


////////////////////////////////////////////////////////////////////

app.get('/movies', (req, res) => {
    const movies = [
    {
        id : 1,
        title : 'La communauté de l\'anneau',
        director : 'P. Jackson',
        year : '2010'
    },
    {
        id : 2,
        title : 'Les deux tours',
        director : 'P. Jackson',
        year : '2013'
    },
    {
        id : 3,
        title : 'Le retour du roi',
        director : 'P. Jackson',
        year : '2017'
    }
    ];
    res.json(movies);
})


// 1. Lire tous les utilisateurs
// 2. Lire un seul utilisateur en fonction de son id
// 3. Créer un utilisateur puis lire tous les utilisateurs
// 4. Mettre à jour un utilisateur puis lire tous les utilisateurs
// 5. Supprimer un utilisateur en fonction de son id puis lire tous les utilisateurs





app.listen(PORT, () => console.log(`app runs on port ${PORT}`));


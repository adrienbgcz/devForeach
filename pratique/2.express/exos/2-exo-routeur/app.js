const express = require("express");
const app = express();
const PORT = 9000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from Express API");
});

app.use("/users", require("./router/userRouter"));

app.use('/libraries', require('./router/libraryRouter'));

app.use('/books', require('./router/bookRouter'));

app.use('/videogames', require('./router/videogameRouter'));

app.use('/movies', require('./router/movieRouter'));



// // ----------------------------------------------
// // GET LIBRARIES
// // ----------------------------------------------

// app.get("/libraries", (req, res) => {
//   const libraries = require("./mock/libraries");
//   res.json(libraries);
// });

// // ----------------------------------------------
// // GET A LIBRARY
// // ----------------------------------------------

// // queryString
// // app.get("/libraries", (req, res) => {
// //   const libraries = require("./mock/libraries");
// //   const queryStringId = parseInt(req.query.id);
// //   const library = libraries.filter((library) => library.id === queryStringId);
// //   res.json(library);
// // });

// // params
// app.get("/libraries/:id", (req, res) => {
//   const libraries = require("./mock/libraries");
//   const paramsId = parseInt(req.params.id);
//   const library = libraries.filter((library) => library.id === paramsId);
//   res.json(library);
// });

// // ----------------------------------------------
// // POST A NEW LIBRARY
// // ----------------------------------------------
// app.use(express.json());

// app.post("/libraries", (req, res) => {
//   const libraries = require("./mock/libraries");
//   const { newLibrary } = req.body;
//   let librariesCopy = [...libraries];
//   librariesCopy.push({ id: libraries.length + 1, ...newLibrary });
//   res.json(librariesCopy);
// });

// // ----------------------------------------------
// // PUT A LIBRARY
// // ----------------------------------------------

// app.put("/libraries/:id", (req, res) => {
//   const libraries = require("./mock/libraries");
//   const { updateLibrary } = req.body;
//   const paramsId = parseInt(req.params.id);
//   libraries.forEach((library, index) => {
//     if (movie.id == paramsId)
//       libraries[index] = { id: library.id, ...updateLibrary };
//   });
//   res.json(libraries);
// });

// // ----------------------------------------------
// // DELETE A LIBRARY
// // ----------------------------------------------

// app.delete("/libraries/:id", (req, res) => {
//   const libraries = require("./mock/libraries");
//   const paramsId = parseInt(req.params.id);
//   libraries.forEach((library, index) => {
//     if (library.id == paramsId) libraries.splice(index, 1);
//   });
//   res.json(libraries);
// });

// // ----------------------------------------------
// // GET BOOKS
// // ----------------------------------------------

// // no params
// app.get("/books", (req, res) => {
//   const books = require("./mock/books");
// res.json(books);
// });

// // ----------------------------------------------
// // GET A BOOK
// // ----------------------------------------------

// // queryString
// // app.get("/books", (req, res) => {
// //   const books = require("./mock/books");
// //   const queryStringId = parseInt(req.query.id);
// //   const book = books.filter((book) => book.id === queryStringId);
// //   res.json(book);
// // });

// // params
// app.get("/books/:id", (req, res) => {
//   const books = require("./mock/books");
//   const paramsId = parseInt(req.params.id);
//   const book = books.filter((book) => book.id === paramsId);
//   res.json(book);
// });

// // ----------------------------------------------
// // POST A NEW BOOK
// // ----------------------------------------------
// app.use(express.json());

// app.post("/books", (req, res) => {
//   const books = require("./mock/books");
//   const { newBook } = req.body;
//   let booksCopy = [...books];
//   booksCopy.push({ id: books.length + 1, ...newBook });
//   res.json(booksCopy);
// });

// // ----------------------------------------------
// // PUT A BOOK
// // ----------------------------------------------

// // app.put("/books/:id", (req, res) => {
// //   const books = require("./mock/books");
// //   const { updatedBook } = req.body;
// //   const paramsId = parseInt(req.params.id);
// //   books.forEach((book, index) => {
// //     if (book.id == paramsId) books[index] = { id: book.id, ...updatedBook };
// //   });

// //   res.json(books);
// // });

// // ----------------------------------------------
// // DELETE A BOOK
// // ----------------------------------------------

// app.delete("/books/:id", (req, res) => {
//   const books = require("./mock/books");
//   const paramsId = parseInt(req.params.id);
//   books.forEach((book, index) => {
//     if (book.id == paramsId) books.splice(index, 1);
//   });
//   res.json(books);
// });

// // ----------------------------------------------
// // GET MOVIES
// // ----------------------------------------------

// app.get("/movies", (req, res) => {
//   const movies = require("./mock/movies");
//   res.json(movies);
// });

// // ----------------------------------------------
// // GET A MOVIE
// // ----------------------------------------------

// // queryString
// // app.get("/movies", (req, res) => {
// //   const movies = require("./mock/movies");
// //   const queryStringId = parseInt(req.query.id);
// //   const movie = movies.filter((movie) => movie.id === queryStringId);
// //   res.json(movie);
// // });

// // params
// app.get("/movies/:id", (req, res) => {
//   const movies = require("./mock/movies");
//   const paramsId = parseInt(req.params.id);
//   const movie = movies.filter((movie) => movie.id === paramsId);
//   res.json(movie);
// });

// // ----------------------------------------------
// // POST A NEW MOVIE
// // ----------------------------------------------
// app.use(express.json());

// app.post("/movies", (req, res) => {
//   const movies = require("./mock/movies");
//   const { newMovie } = req.body;
//   let moviesCopy = [...movies];
//   moviesCopy.push({ id: movies.length + 1, ...newMovie });
//   res.json(moviesCopy);
// });

// // ----------------------------------------------
// // PUT A MOVIE
// // ----------------------------------------------

// app.put("/movies/:id", (req, res) => {
//   const movies = require("./mock/movies");
//   const { updatedMovie } = req.body;
//   const paramsId = parseInt(req.params.id);
//   movies.forEach((movie, index) => {
//     if (movie.id == paramsId) movies[index] = { id: movie.id, ...updatedmovie };
//   });
//   res.json(movies);
// });

// // ----------------------------------------------
// // DELETE A MOVIE
// // ----------------------------------------------

// app.delete("/movies/:id", (req, res) => {
//   const movies = require("./mock/movies");
//   const paramsId = parseInt(req.params.id);
//   movies.forEach((movie, index) => {
//     if (movie.id == paramsId) movies.splice(index, 1);
//   });
//   res.json(movies);
// });

// // ----------------------------------------------
// // GET VIDEOGEMS
// // ----------------------------------------------

// app.get("/videogames", (req, res) => {
//   const videogames = require("./mock/videogames");
//   res.json(videogames);
// });

// // ----------------------------------------------
// // GET A VIDEOGAME
// // ----------------------------------------------

// // queryString
// // app.get("/videogames", (req, res) => {
// //   const videogames = require("./mock/videogames");
// //   const queryStringId = parseInt(req.query.id);
// //   const videogame = videogames.filter((videogame) => videogame.id === queryStringId);
// //   res.json(videogame);
// // });

// // params
// app.get("/videogames/:id", (req, res) => {
//   const videogames = require("./mock/videogames");
//   const paramsId = parseInt(req.params.id);
//   const videogame = videogames.filter((videogame) => videogame.id === paramsId);
//   res.json(videogame);
// });

// // ----------------------------------------------
// // POST A NEW VIDEOGAME
// // ----------------------------------------------
// app.use(express.json());

// app.post("/videogames", (req, res) => {
//   const videogames = require("./mock/videogames");
//   console.log("ici")
//   const { newVideogame } = req.body;
//   let videogamesCopy = [...videogames];
//   videogamesCopy.push({ id: videogamesCopy.length + 1, ...newVideogame });
//   res.json(videogamesCopy);
// });

// // ----------------------------------------------
// // PUT A VIDEOGAME
// // ----------------------------------------------

// app.put("/videogames/:id", (req, res) => {
//   const videogames = require("./mock/videogames");
//   const { updatedVideogame } = req.body;
//   const paramsId = parseInt(req.params.id);
//   videogames.forEach((updatedVideogame, index) => {
//     if (movie.id == paramsId)
//       videogames[index] = { id: videogame.id, ...updatedVideogame };
//   });
//   res.json(videogames);
// });

// // ----------------------------------------------
// // DELETE A VIDEOGAME
// // ----------------------------------------------

// app.delete("/videogames/:id", (req, res) => {
//   const videogames = require("./mock/videogames");
//   const paramsId = parseInt(req.params.id);
//   videogames.forEach((videogame, index) => {
//     if (videogame.id == paramsId) videogames.splice(index, 1);
//   });
//   res.json(videogames);
// });

// ----------------------------------------------
// LISTENER
// ----------------------------------------------

app.listen(PORT, () => console.log(`app listening on port ${PORT}`));

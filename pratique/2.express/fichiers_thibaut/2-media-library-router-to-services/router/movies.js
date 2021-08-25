const express = require("express");
const router = express.Router();

const movies = require("../mock/movies");

// ----------------------------------------------
// GET MOVIES
// ----------------------------------------------

router.get("/", (req, res) => {
  res.json(movies);
});

// ----------------------------------------------
// GET A MOVIE
// ----------------------------------------------

// queryString
// router.get("/movies", (req, res) => {

//   const queryStringId = parseInt(req.query.id);
//   const movie = movies.filter((movie) => movie.id === queryStringId);
//   res.json(movie);
// });

// params
// router.get("/movies/:id", (req, res) => {
//
//   const paramsId = parseInt(req.params.id);
//   const movie = movies.filter((movie) => movie.id === paramsId);
//   res.json(movie);
// });

// ----------------------------------------------
// POST A NEW MOVIE
// ----------------------------------------------

router.post("/movies", (req, res) => {
  const { newMovie } = req.body;
  let moviesCopy = [...movies];
  moviesCopy.push({ id: movies.length + 1, ...newMovie });
  res.json(moviesCopy);
});

// ----------------------------------------------
// PUT A MOVIE
// ----------------------------------------------

router.put("/movies/:id", (req, res) => {
  const { updatedMovie } = req.body;
  const paramsId = parseInt(req.params.id);
  movies.forEach((movie, index) => {
    if (movie.id == paramsId) movies[index] = { id: movie.id, ...updatedmovie };
  });
  res.json(movies);
});

// ----------------------------------------------
// DELETE A MOVIE
// ----------------------------------------------

router.delete("/movies/:id", (req, res) => {
  const paramsId = parseInt(req.params.id);
  movies.forEach((movie, index) => {
    if (movie.id == paramsId) movies.splice(index, 1);
  });
  res.json(movies);
});

module.exports = router;

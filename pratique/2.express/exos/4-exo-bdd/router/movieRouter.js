const express = require("express");
const router = express.Router();
// const movies = require("../mock/movies");
const movieServices = require('../service/movieService');




router.get("/", async (req, res) => {
  let movies = [];
  try {
    movies = await movieServices.getMovies();

  } catch (error) {
    console.error(error)
    res.status(500).send('Internal server error')
  }
  res.json(movies);
});







router.get("/:id", async (req, res) => {
  const paramsId = parseInt(req.params.id);
  let movie = [];
  try {
    movie = await movieServices.getMovie(paramsId)
  } catch (error) {
    console.error(error)
    res.status(500).send('Internal server error')
  }

  res.json(movie);
});



router.post("/", async (req, res) => {
  const { newMovie } = req.body;

  let movies = [];
  try {
    movies = await movieServices.createMovie(newMovie)
  } catch (error) {
    console.error(error)
    res.status(500).send('Internal server error')
  }

  res.json(movies);
});






router.put("/:id", async (req, res) => {
  const { updatedMovie } = req.body;
  const paramsId = parseInt(req.params.id);
  let movies = []
  try {
    movies = await movieServices.updateMovie(paramsId, updatedMovie)
  } catch (error) {
    console.error(error)
    res.status(500).send('Internal server error')
  }

  res.json(movies);
});




router.delete("/:id", async (req, res) => {
  let movies = []
  const paramsId = parseInt(req.params.id);

  try {
    movies = await movieServices.deleteMovie(paramsId)
  } catch (error) {
    console.error(error)
    res.status(500).send('Internal server error')
  }

  res.json(movies);
});
    
    module.exports = router;
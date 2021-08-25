const express = require("express");
const router = express.Router();
// const movies = require("../mock/movies");
const movieServices = require('../service/movieService');
const { body } = require("express-validator");
const { validationResult } = require("express-validator");
const movieRules = require("../utils/middleware/validation/movieRules");
const validate = require("../utils/middleware/validation/validate");




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



router.post("/", movieRules(), validate,


async (req, res) => {
    const { movie } = req.body;

    let movies = [];
    try {
      movies = await movieServices.createMovie(movie)
    } catch (error) {
      console.error(error)
      res.status(500).send('Internal server error')
    }

    res.json(movies);
  });






router.put("/:id", movieRules(), validate,

async (req, res) => {
  const { movie } = req.body;
  const paramsId = parseInt(req.params.id);
  let movies = []
  try {
    movies = await movieServices.updateMovie(paramsId, movie)
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
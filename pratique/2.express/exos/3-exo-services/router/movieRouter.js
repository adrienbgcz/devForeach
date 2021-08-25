const express = require("express");
const router = express.Router();
const movies = require("../mock/movies");
const movieServices = require('../service/movieService');




router.get("/", (req, res) => {
    const movies = movieServices.getMovies();
    res.json(movies);
  });
  
  
  
  router.get("/:id", (req, res) => {
      const paramsId = parseInt(req.params.id);
     const movie = movieServices.getMovie(paramsId)
      res.json(movie);
  });
  
  
  router.post("/", (req, res) => {
      const { newMovie } = req.body;
      const createdMovie = movieServices.createMovie(newMovie)
      res.json(createdMovie);
  });
  
  
  router.put("/:id", (req, res) => {
      const { updateMovie } = req.body;
      const paramsId = parseInt(req.params.id);
     const updatedMovie = movieServices.updateMovie(paramsId, updateMovie)
    
      res.json(movies);
    });
  
  
    router.delete("/:id", (req, res) => {
      const paramsId = parseInt(req.params.id);
      const deleteMovie = movieServices.deleteMovie(paramsId)
      res.json(movies);
    });
  
    
    module.exports = router;
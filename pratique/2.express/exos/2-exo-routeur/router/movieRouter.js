const express = require("express");
const router = express.Router();
const movies = require("../mock/movies");




router.get("/", (req, res) => {  
    res.json(movies);
});



router.get(":id", (req, res) => {
    const paramsId = parseInt(req.params.id);
    const movie = movies.filter((movie) => movie.id === paramsId);
    res.json(movie);
});


router.post("/", (req, res) => {
    const { newMovie } = req.body;
    let moviesCopy = [...movies];
    moviesCopy.push({ id: movies.length + 1, ...newMovie });
    res.json(moviesCopy);
});


router.put("/:id", (req, res) => {
    const { updatedMovie } = req.body;
    const paramsId = parseInt(req.params.id);
    movies.forEach((movie, index) => {
        if (movie.id == paramsId) movies[index] = { id: movie.id, ...updatedmovie };
    });
    res.json(movies);
});

router.delete("/:id", (req, res) => {
    const paramsId = parseInt(req.params.id);
    movies.forEach((movie, index) => {
        if (movie.id == paramsId) movies.splice(index, 1);
    });
    res.json(movies);
});




module.exports = router;

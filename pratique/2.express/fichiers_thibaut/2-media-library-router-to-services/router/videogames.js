const express = require("express");
const router = express.Router();

const videogames = require("../mock/videogames");

// ----------------------------------------------
// GET VIDEOGEMS
// ----------------------------------------------

router.get("/", (req, res) => {
  res.json(videogames);
});

// ----------------------------------------------
// GET A VIDEOGAME
// ----------------------------------------------

// queryString
// router.get("/", (req, res) => {
//   const queryStringId = parseInt(req.query.id);
//   const videogame = videogames.filter((videogame) => videogame.id === queryStringId);
//   res.json(videogame);
// });

// params
// router.get("/:id", (req, res) => {
//   const paramsId = parseInt(req.params.id);
//   const videogame = videogames.filter((videogame) => videogame.id === paramsId);
//   res.json(movie);
// });

// ----------------------------------------------
// POST A NEW VIDEOGAME
// ----------------------------------------------

router.post("/", (req, res) => {
  const { newVideogame } = req.body;
  let videogamesCopy = [...videogames];
  videogamesCopy.push({ id: videgogamesCopy.length + 1, ...newVideogame });
  res.json(videogamesCopy);
});

// ----------------------------------------------
// PUT A VIDEOGAME
// ----------------------------------------------

router.put("/:id", (req, res) => {
  const { updatedVideogame } = req.body;
  const paramsId = parseInt(req.params.id);
  videogames.forEach((videogame, index) => {
    if (movie.id == paramsId)
      videogames[index] = { id: videogame.id, ...updatedVideogame };
  });
  res.json(videogames);
});

// ----------------------------------------------
// DELETE A VIDEOGAME
// ----------------------------------------------

router.delete("/:id", (req, res) => {
  const paramsId = parseInt(req.params.id);
  videogames.forEach((videogame, index) => {
    if (videogame.id == paramsId) videogames.splice(index, 1);
  });
  res.json(videogames);
});

module.exports = router;

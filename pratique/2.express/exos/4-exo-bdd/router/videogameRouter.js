const express = require("express");
const router = express.Router();
// const videogames = require("../mock/videogames");
const videogameServices = require('../service/videogameService');


router.get("/", async (req, res) => {
  let videogames = [];
  try {
    videogames = await videogameServices.getVideogames();

  } catch (error) {
    console.error(error)
    res.status(500).send('Internal server error')
  }
  res.json(videogames);
});







router.get("/:id", async (req, res) => {
  const paramsId = parseInt(req.params.id);
  let videogame = [];
  try {
    videogame = await videogameServices.getVideogame(paramsId)
  } catch (error) {
    console.error(error)
    res.status(500).send('Internal server error')
  }

  res.json(videogame);
});



router.post("/", async (req, res) => {
  const { newVideogame } = req.body;

  let videogames = [];
  try {
    videogames = await videogameServices.createVideogame(newVideogame)
  } catch (error) {
    console.error(error)
    res.status(500).send('Internal server error')
  }

  res.json(videogames);
});






router.put("/:id", async (req, res) => {
  const { updatedVideogame } = req.body;
  const paramsId = parseInt(req.params.id);
  let videogames = []
  try {
    videogames = await videogameServices.updateVideogame(paramsId, updatedVideogame)
  } catch (error) {
    console.error(error)
    res.status(500).send('Internal server error')
  }

  res.json(videogames);
});




router.delete("/:id", async (req, res) => {
  let videogames = []
  const paramsId = parseInt(req.params.id);

  try {
    videogames = await videogameServices.deleteVideogame(paramsId)
  } catch (error) {
    console.error(error)
    res.status(500).send('Internal server error')
  }

  res.json(videogames);
});
  
  module.exports = router;
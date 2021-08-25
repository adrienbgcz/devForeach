const express = require("express");
const router = express.Router();
const videogames = require("../mock/videogames");
const videogameServices = require('../service/videogameService');


router.get("/", (req, res) => {
  const videogames = videogameServices.getVideogames();
  res.json(videogames);
});



router.get("/:id", (req, res) => {
    const paramsId = parseInt(req.params.id);
   const videogame = videogameServices.getVideogame(paramsId)
    res.json(videogame);
});


router.post("/", (req, res) => {
    const { newVideogame } = req.body;
    const createdVideogame = videogameServices.createVideogame(newVideogame)
    res.json(createdVideogame);
});


router.put("/:id", (req, res) => {
    const { updateVideogame } = req.body;
    const paramsId = parseInt(req.params.id);
   const updatedVideogame = videogameServices.updateVideogame(paramsId, updateVideogame)
  
    res.json(videogames);
  });


  router.delete("/:id", (req, res) => {
    const paramsId = parseInt(req.params.id);
    const deleteVideogame = videogameServices.deleteVideogame(paramsId)
    res.json(videogames);
  });

  
  module.exports = router;
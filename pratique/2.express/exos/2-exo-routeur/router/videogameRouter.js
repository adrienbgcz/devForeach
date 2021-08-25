const express = require("express");
const router = express.Router();
const videogames = require("../mock/videogames");


router.get("/", (req, res) => {
    res.json(videogames);
  });

  router.get("/:id", (req, res) => {
    const paramsId = parseInt(req.params.id);
    const videogame = videogames.filter((videogame) => videogame.id === paramsId);
    res.json(videogame);
  });
  
  router.post("/", (req, res) => {
      console.log("là")
    const { newVideogame } = req.body;
    let videogamesCopy = [...videogames];
    videogamesCopy.push({ id: videogamesCopy.length + 1, ...newVideogame });
    res.json(videogamesCopy);
  });

  ///////////////////////////////////

  router.put("/:id", (req, res) => {
    const { updatedVideogame } = req.body;
    const paramsId = parseInt(req.params.id);
    videogames.forEach((videogame, index) => {
      if (videogame.id == paramsId)
        videogames[index] = { id: videogame.id, ...updatedVideogame };
    });
    res.json(videogames);
  });

  ////////////////////////////////////


  router.delete("/:id", (req, res) => {
    const paramsId = parseInt(req.params.id);
    videogames.forEach((videogame, index) => {
      if (videogame.id == paramsId) videogames.splice(index, 1);
    });
    res.json(videogames);
  });
  



module.exports = router;
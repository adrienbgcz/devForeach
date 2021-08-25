const express = require("express");
const router = express.Router();
const etiquetteService = require('../service/etiquetteService');




router.get("/", async (req, res) => {
    let etiquettes = [];
    try {
      etiquettes = await etiquetteService.getEtiquettes();
  
    } catch (error) {
      console.error(error)
      res.status(500).send('Internal server error')
    }
    res.json(etiquettes);
  });




  router.get("/:id", async (req, res) => {
    let etiquette = [];
    let paramsId = req.params.id
    try {
      etiquette = await etiquetteService.getEtiquette(paramsId);
  
    } catch (error) {
      console.error(error)
      res.status(500).send('Internal server error')
    }
    res.json(etiquette);
  });



router.post("/", async (req, res) => {
  
  const { etiquette } = req.body;
    
  let etiquettes = [];
  try {
    etiquettes = await etiquetteService.createEtiquette(etiquette)
  } catch (error) {
    console.error(error)
    res.status(500).send('Internal server error')
  }
  res.json(etiquettes);
});




router.put("/:id", async (req, res) => {
  const { etiquette } = req.body;
  const paramsId = parseInt(req.params.id);
  let etiquettes = []
  try {
    etiquettes = await etiquetteService.updateEtiquette(paramsId, etiquette)
  } catch (error) {
    console.error(error)
    res.status(500).send('Internal server error')
  }

  res.json(etiquettes);
});


router.delete("/:id", async (req, res) => {
  let etiquettes = []
  const paramsId = parseInt(req.params.id);

  try {
    etiquettes = await etiquetteService.deleteEtiquette(paramsId)
  } catch (error) {
    console.error(error)
    res.status(500).send('Internal server error')
  }

  res.json(etiquettes);
});



  module.exports = router;
const express = require("express");
const router = express.Router();

const centreVacancesServices = require('../service/centreVacancesService');
const centreVacancesRules = require("../utils/middleware/validation/centreVacancesRules");
const validate = require('../utils/middleware/validation/validate')



router.get("/", async (req, res) => {
    let centresVacances = [];
    try {
      centresVacances = await centreVacancesServices.getCentresVacances();
  
    } catch (error) {
      console.error(error)
      res.status(500).send('Internal server error')
    }
    res.json(centresVacances);
  });


  router.get("/:id", async (req, res) => {
    let centreVacances = [];
    let paramsId = req.params.id
    try {
      centreVacances = await centreVacancesServices.getCentreVacances(paramsId);
  
    } catch (error) {
      console.error(error)
      res.status(500).send('Internal server error')
    }
    res.json(centreVacances);
  });



router.post("/", centreVacancesRules(), validate,

async (req, res) => {
  const { centreVacances } = req.body;

  let centresVacances = [];
  try {
    centresVacances = await centreVacancesServices.createCentreVacances(centreVacances)
  } catch (error) {
    console.error(error)
    res.status(500).send('Internal server error')
  }

  res.json(centresVacances);
});






router.put("/:id", centreVacancesRules(), validate,

async (req, res) => {
  const { centreVacances } = req.body;
  const paramsId = parseInt(req.params.id);
  let centresVacances = []
  try {
    centresVacances = await centreVacancesServices.updateCentreVacances(paramsId, centreVacances)
  } catch (error) {
    console.error(error)
    res.status(500).send('Internal server error')
  }

  res.json(centresVacances);
});



router.delete("/:id", async (req, res) => {
  let centresVacances = []
  const paramsId = parseInt(req.params.id);

  try {
    centresVacances = await centreVacancesServices.deleteCentreVacances(paramsId)
  } catch (error) {
    console.error(error)
    res.status(500).send('Internal server error')
  }

  res.json(centresVacances);
});






  module.exports = router;
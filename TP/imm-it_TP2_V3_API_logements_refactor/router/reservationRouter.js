const express = require("express");
const router = express.Router();

const reservationService = require('../service/reservationService');
const reservationRules = require('../utils/middleware/validation/reservationRules')
const validate = require('../utils/middleware/validation/validate')



router.get("/", async (req, res) => {
    let reservations = [];
    try {
      reservations = await reservationService.getReservations();
  
    } catch (error) {
      console.error(error)
      res.status(500).send('Internal server error')
    }
    res.json(reservations);
  });


  router.get("/:id", async (req, res) => {
    let reservation = [];
    let paramsId = req.params.id
    try {
      reservation = await reservationService.getReservation(paramsId);
  
    } catch (error) {
      console.error(error)
      res.status(500).send('Internal server error')
    }
    res.json(reservation);
  });



router.post("/", 
reservationRules(), validate,

async (req, res) => {
  console.log("toto")
  const { reservation } = req.body;
  console.log(req.body)
  
  let reservations = [];
  try {
    reservations = await reservationService.createReservation(reservation)
  } catch (error) {
    console.error(error)
    res.status(500).send('Internal server error')
  }

  res.json(reservations);
});






router.put("/:id", reservationRules(), validate,

async (req, res) => {
  const { reservation } = req.body;
  const paramsId = parseInt(req.params.id);
  let reservations = []
  try {
    reservations = await reservationService.updateReservation(paramsId, reservation)
  } catch (error) {
    console.error(error)
    res.status(500).send('Internal server error')
  }

  res.json(reservations);
});



router.delete("/:id", async (req, res) => {
  let reservations = []
  const paramsId = parseInt(req.params.id);

  try {
    reservations = await reservationService.deleteReservation(paramsId)
  } catch (error) {
    console.error(error)
    res.status(500).send('Internal server error')
  }

  res.json(reservations);
});



  module.exports = router;
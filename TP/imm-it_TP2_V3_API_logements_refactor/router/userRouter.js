const express = require("express");
const router = express.Router();

const userService = require('../service/userService');
// const centreVacancesRules = require("../utils/middleware/validation/centreVacancesRules");
// const validate = require('../utils/middleware/validation/validate')



router.get("/", async (req, res) => {
    let users = [];
    try {
      users = await userService.getUsers();
  
    } catch (error) {
      console.error(error)
      res.status(500).send('Internal server error')
    }
    res.json(users);
  });


  router.get("/:id", async (req, res) => {
    let user = [];
    let paramsId = req.params.id
    try {
      user = await userService.getUser(paramsId);
  
    } catch (error) {
      console.error(error)
      res.status(500).send('Internal server error')
    }
    res.json(user);
  });



router.post("/", 

async (req, res) => {
  const { user } = req.body;
  console.log(req.body)
  let users = [];
  try {
    users = await userService.createUser(user)
  } catch (error) {
    console.error(error)
    res.status(500).send('Internal server error')
  }

  res.json(users);
});






router.put("/:id", 

async (req, res) => {
  const { user } = req.body;
  const paramsId = parseInt(req.params.id);
  let users = []
  try {
    users = await userService.updateUser(paramsId, user)
  } catch (error) {
    console.error(error)
    res.status(500).send('Internal server error')
  }

  res.json(users);
});



router.delete("/:id", async (req, res) => {
  let users = []
  const paramsId = parseInt(req.params.id);

  try {
    users = await userService.deleteUser(paramsId)
  } catch (error) {
    console.error(error)
    res.status(500).send('Internal server error')
  }

  res.json(users);
});






  module.exports = router;
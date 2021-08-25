
const express = require("express");
const router = express.Router();
// const libraries = require("../mock/libraries");
const libraryServices = require('../service/libraryService');
const {body} = require("express-validator");
const { validationResult } = require("express-validator");
const libraryRules = require("../utils/middleware/validation/libraryRules");

const validate = require('../utils/middleware/validation/validate')



router.get("/", async (req, res) => {
  let libraries = [];
  try {
    libraries = await libraryServices.getLibraries();

  } catch (error) {
    console.error(error)
    res.status(500).send('Internal server error')
  }
  res.json(libraries);
});







router.get("/:id", async (req, res) => {
  const paramsId = parseInt(req.params.id);
  let library = [];
  try {
    library = await libraryServices.getLibrary(paramsId)
  } catch (error) {
    console.error(error)
    res.status(500).send('Internal server error')
  }

  res.json(library);
});



router.post("/", libraryRules(), validate,


async (req, res) => {
  const { library } = req.body;

  let libraries = [];
  try {
    libraries = await libraryServices.createLibrary(library)
  } catch (error) {
    console.error(error)
    res.status(500).send('Internal server error')
  }

  res.json(libraries);
});






router.put("/:id", libraryRules(), validate,

async (req, res) => {
  const { library } = req.body;
  const paramsId = parseInt(req.params.id);
  let libraries = []
  try {
    libraries = await libraryServices.updateLibrary(paramsId, library)
  } catch (error) {
    console.error(error)
    res.status(500).send('Internal server error')
  }

  res.json(libraries);
});




router.delete("/:id", async (req, res) => {
  let libraries = []
  const paramsId = parseInt(req.params.id);

  try {
    libraries = await libraryServices.deleteLibrary(paramsId)
  } catch (error) {
    console.error(error)
    res.status(500).send('Internal server error')
  }

  res.json(libraries);
});




// router.post('/:libraryId/book/:bookId', async (req, res) => {
//   const bookId = parseInt(req.params.bookId)
//   const libraryId = parseInt(req.params.libraryId)
//   try {
//     await libraryServices.updateLibraryWithBook(libraryId, bookId)
//   } catch (error) {
//     console.error(error)
//     res.status(500).send('Internal server error')
//   }

// })


  
  module.exports = router;
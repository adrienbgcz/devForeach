
const express = require("express");
const router = express.Router();
// const libraries = require("../mock/libraries");
const libraryServices = require('../service/libraryService');


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



router.post("/", async (req, res) => {
  const { newLibrary } = req.body;

  let libraries = [];
  try {
    libraries = await libraryServices.createLibrary(newLibrary)
  } catch (error) {
    console.error(error)
    res.status(500).send('Internal server error')
  }

  res.json(libraries);
});






router.put("/:id", async (req, res) => {
  const { updatedLibrary } = req.body;
  const paramsId = parseInt(req.params.id);
  let libraries = []
  try {
    libraries = await libraryServices.updateLibrary(paramsId, updatedLibrary)
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
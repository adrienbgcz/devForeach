
const express = require("express");
const router = express.Router();
const libraries = require("../mock/libraries");
const libraryServices = require('../service/libraryService');

router.get("/", (req, res) => {
  const libraries = libraryServices.getLibraries();
  res.json(libraries);
});



router.get("/:id", (req, res) => {
    const paramsId = parseInt(req.params.id);
   const library = libraryServices.getLibrary(paramsId)
    res.json(library);
});


router.post("/", (req, res) => {
    const { newLibrary } = req.body;
    const createdLibrary = libraryServices.createLibrary(newLibrary)
    res.json(createdLibrary);
});


router.put("/:id", (req, res) => {
    const { updateLibrary } = req.body;
    const paramsId = parseInt(req.params.id);
   const updatedLibrary = libraryServices.updateLibrary(paramsId, updateLibrary)
  
    res.json(libraries);
  });


  router.delete("/:id", (req, res) => {
    const paramsId = parseInt(req.params.id);
    const deleteLibrary = libraryServices.deleteLibrary(paramsId)
    res.json(libraries);
  });

  
  module.exports = router;
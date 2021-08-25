
const express = require("express");
const router = express.Router();
const libraries = require("../mock/libraries");

router.get("/", (req, res) => {
    res.json(libraries);
});

module.exports = router;



router.get("/:id", (req, res) => {
    const paramsId = parseInt(req.params.id);
    const library = libraries.filter((library) => library.id === paramsId);
    res.json(library);
});


router.post("/", (req, res) => {
    const { newLibrary } = req.body;
    let librariesCopy = [...libraries];
    librariesCopy.push({ id: libraries.length + 1, ...newLibrary });
    res.json(librariesCopy);
});



router.put("/:id", (req, res) => {
    const { updateLibrary } = req.body;
    const paramsId = parseInt(req.params.id);
    libraries.forEach((library, index) => {
      if (library.id == paramsId)
        libraries[index] = { id: library.id, ...updateLibrary };
    });
    res.json(libraries);
  });


  router.delete("/:id", (req, res) => {
    const paramsId = parseInt(req.params.id);
    libraries.forEach((library, index) => {
      if (library.id == paramsId) libraries.splice(index, 1);
    });
    res.json(libraries);
  });


  

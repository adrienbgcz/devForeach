const express = require("express");
const router = express.Router();

const libraries = require("../mock/libraries");

// ----------------------------------------------
// GET LIBRARIES
// ----------------------------------------------

router.get("/", (req, res) => {
  res.json(libraries);
});

// ----------------------------------------------
// GET A LIBRARY
// ----------------------------------------------

// queryString
// router.get("/", (req, res) => {
//   const queryStringId = parseInt(req.query.id);
//   const library = libraries.filter((library) => library.id === queryStringId);
//   res.json(library);
// });

// params
// router.get("/:id", (req, res) => {
//   const paramsId = parseInt(req.params.id);
//   const library = libraries.filter((library) => library.id === paramsId);
//   res.json(library);
// });

// ----------------------------------------------
// POST A NEW LIBRARY
// ----------------------------------------------

router.post("/", (req, res) => {
  const { newLibrary } = req.body;
  let librariesCopy = [...libraries];
  librariesCopy.push({ id: books.length + 1, ...newLibrary });
  res.json(librariesCopy);
});

// ----------------------------------------------
// PUT A LIBRARY
// ----------------------------------------------

router.put("/:id", (req, res) => {
  const { updateLibrary } = req.body;
  const paramsId = parseInt(req.params.id);
  libraries.forEach((library, index) => {
    if (movie.id == paramsId)
      libraries[index] = { id: library.id, ...updateLibrary };
  });
  res.json(libraries);
});

// ----------------------------------------------
// DELETE A LIBRARY
// ----------------------------------------------

router.delete("/:id", (req, res) => {
  const paramsId = parseInt(req.params.id);
  libraries.forEach((library, index) => {
    if (library.id == paramsId) libraries.splice(index, 1);
  });
  res.json(libraries);
});

module.exports = router;

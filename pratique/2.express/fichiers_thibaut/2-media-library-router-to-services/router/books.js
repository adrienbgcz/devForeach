const express = require("express");
const router = express.Router();

const books = require("../mock/books");

// ----------------------------------------------
// GET BOOKS
// ----------------------------------------------

// no params
router.get("/", (req, res) => {
  res.json(books);
});

// ----------------------------------------------
// GET A BOOK
// ----------------------------------------------

// queryString
// router.get("/", (req, res) => {
//   const queryStringId = parseInt(req.query.id);
//   const book = books.filter((book) => book.id === queryStringId);
//   res.json(book);
// });

// params
// router.get("/:id", (req, res) => {
//   const paramsId = parseInt(req.params.id);
//   const book = books.filter((book) => book.id === paramsId);
//   res.json(book);
// });

// ----------------------------------------------
// POST A NEW BOOK
// ----------------------------------------------

router.post("/", (req, res) => {
  const { newBook } = req.body;
  let booksCopy = [...books];
  booksCopy.push({ id: books.length + 1, ...newBook });
  res.json(booksCopy);
});

// ----------------------------------------------
// PUT A BOOK
// ----------------------------------------------

router.put("/:id", (req, res) => {
  const { updatedBook } = req.body;
  const paramsId = parseInt(req.params.id);
  books.forEach((book, index) => {
    if (book.id == paramsId) books[index] = { id: book.id, ...updatedBook };
  });

  res.json(books);
});

// ----------------------------------------------
// DELETE A BOOK
// ----------------------------------------------

router.delete("/:id", (req, res) => {
  const paramsId = parseInt(req.params.id);
  books.forEach((book, index) => {
    if (book.id == paramsId) books.splice(index, 1);
  });
  res.json(books);
});

module.exports = router;

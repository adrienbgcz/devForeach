const express = require("express");
const router = express.Router();
// const books = require("../mock/books");
const bookServices = require('../service/bookService');





router.get("/", async (req, res) => {
  let books = [];
  try {
    books = await bookServices.getBooks();

  } catch (error) {
    console.error(error)
    res.status(500).send('Internal server error')
  }
  res.json(books);
});






router.get("/:id", async (req, res) => {
  const paramsId = parseInt(req.params.id);
  let book = [];
  try {
    book = await bookServices.getBook(paramsId)
  } catch (error) {
    console.error(error)
    res.status(500).send('Internal server error')
  }

  res.json(book);
});



router.post("/", async (req, res) => {
  const { newBook } = req.body;

  let books = [];
  try {
    books = await bookServices.createBook(newBook)
  } catch (error) {
    console.error(error)
    res.status(500).send('Internal server error')
  }

  res.json(books);
});






router.put("/:id", async (req, res) => {
  const { updatedBook } = req.body;
  const paramsId = parseInt(req.params.id);
  let books = []
  try {
    books = await bookServices.updateBook(paramsId, updatedBook)
  } catch (error) {
    console.error(error)
    res.status(500).send('Internal server error')
  }

  res.json(books);
});


router.delete("/:id", async (req, res) => {
  let books = []
  const paramsId = parseInt(req.params.id);

  try {
    books = await bookServices.deleteBook(paramsId)
  } catch (error) {
    console.error(error)
    res.status(500).send('Internal server error')
  }

  res.json(books);
});











module.exports = router;
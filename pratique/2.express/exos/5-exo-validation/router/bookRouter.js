const express = require("express");
const router = express.Router();
// const books = require("../mock/books");
const bookServices = require('../service/bookService');

const bookRules = require('../utils/middleware/validation/bookRules')
const validate = require('../utils/middleware/validation/validate')





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



router.post("/", bookRules(), validate,

async (req, res) => {
  const { book } = req.body;

  let books = [];
  try {
    books = await bookServices.createBook(book)
  } catch (error) {
    console.error(error)
    res.status(500).send('Internal server error')
  }

  res.json(books);
});






router.put("/:id", bookRules(), validate,


async (req, res) => {
  const { book } = req.body;
  const paramsId = parseInt(req.params.id);
  let books = []
  try {
    books = await bookServices.updateBook(paramsId, book)
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
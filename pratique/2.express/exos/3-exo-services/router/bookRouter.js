const express = require("express");
const router = express.Router();
const books = require("../mock/books");
const bookServices = require('../service/bookService');




router.get("/", (req, res) => {
  const books = bookServices.getBooks();
  res.json(books);
});



router.get("/:id", (req, res) => {
    const paramsId = parseInt(req.params.id);
   const book = bookServices.getBook(paramsId)
    res.json(book);
});


router.post("/", (req, res) => {
    const { newBook } = req.body;
    const createdBook = bookServices.createBook(newBook)
    res.json(createdBook);
});


router.put("/:id", (req, res) => {
    const { updateBook } = req.body;
    const paramsId = parseInt(req.params.id);
   const updatedBook = bookServices.updateBook(paramsId, updateBook)
  
    res.json(books);
  });


  router.delete("/:id", (req, res) => {
    const paramsId = parseInt(req.params.id);
    const deletedBook = bookServices.deleteBook(paramsId)
    res.json(books);
  });
  










module.exports = router;
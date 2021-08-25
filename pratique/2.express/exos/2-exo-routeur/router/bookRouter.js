const express = require("express");
const router = express.Router();
const books = require("../mock/books");




router.get("/", (req, res) => {
    res.json(books);
});



router.get("/:id", (req, res) => {
    const paramsId = parseInt(req.params.id);
    const book = books.filter((book) => book.id === paramsId);
    res.json(book);
});


router.post("/", (req, res) => {
    const { newBook } = req.body;
    let booksCopy = [...books];
    booksCopy.push({ id: books.length + 1, ...newBook });
    res.json(booksCopy);
});


router.put("/:id", (req, res) => {
    const { updatedBook } = req.body;
    const paramsId = parseInt(req.params.id);
    books.forEach((book, index) => {
      if (book.id == paramsId) books[index] = { id: book.id, ...updatedBook };
    });
  
    res.json(books);
  });


  router.delete("/:id", (req, res) => {
    const paramsId = parseInt(req.params.id);
    books.forEach((book, index) => {
      if (book.id == paramsId) books.splice(index, 1);
    });
    res.json(books);
  });
  










module.exports = router;
const books = require("../mock/books");


const getBooks = () => {
    return books;
}


const getBook = (paramsId) => {
    const book = books.filter((book) => book.id === paramsId);
    return book;  
}


const createBook = (newBook) => {
    let booksCopy = [...books];
    booksCopy.push({ id: books.length + 1, ...newBook });
  return booksCopy;
}


const updateBook = (paramsId, updatedBook) => {
    books.forEach((book, index) => {
        if (book.id == paramsId) books[index] = { id: book.id, ...updatedBook };
      });
      return true;
}


const deleteBook = (paramsId) => {
    books.forEach((book, index) => {
        if (book.id == paramsId) books.splice(index, 1);
      });
      return books
}

module.exports = {getBooks, getBook, createBook, updateBook, deleteBook};
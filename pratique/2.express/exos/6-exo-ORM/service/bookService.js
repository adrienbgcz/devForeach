// const books = require("../mock/books");
const { query } = require("../utils/db");
const db = require("../utils/db");
const Book = require("../utils/sequelize/models/Book");





const getBooks = async () => {

    let books = []
    try {
        books = await Book.findAll();
        // const query = await db.query('SELECT * FROM book')
        // books = query.rows;
    } catch (error) {
        console.error(error)
    }
    return books;
}





const getBook = async (paramsId) => {
    let book = []
    try {
        book = await Book.findAll({ where: { id: paramsId } });
        // const query = await db.query('SELECT * FROM book WHERE id = $1', [paramsId])
        // book = query.rows;
    } catch (error) {
        console.error(error)
    }
    return book;
}




const createBook = async (book) => {
    let books = []
    const title = book.title;
    const author = book.author;
    const newYear = book.year;
    const newPrice = book.price;
    const newStock = book.stock;
    console.log({book})
    try {
        await Book.create( {title, author, year : newYear, price : newPrice, stock : newStock})
        // await db.query('INSERT INTO book (title, author, year, price, stock) VALUES ($1,$2,$3,$4,$5)', [newTitle, newAuthor, newYear, newPrice, newStock])
        books = await getBooks()
    } catch (error) {
        console.error(error)
    }
    return books;
}
const year = 10

const toto = {
    year
}




const updateBook = async (paramsId, book) => {
    let books = []
    const updatedTitle = book.title;
    try {
        await Book.update({ title : updatedTitle }, { where: { id: paramsId } });
        // await db.query('UPDATE book SET title = $1 WHERE id = $2', [updatedTitle, paramsId]);
        books = await getBooks()
    } catch (error) {
        console.error(error)
    }

    return books;
}


const deleteBook = async (paramsId) => {
    let books = []
    try {
        await Book.destroy({ where: { id: paramsId } });
        // await db.query('DELETE FROM book WHERE id = $1', [paramsId])
        books = await getBooks()
    } catch (error) {
        console.error(error)
    }

    return books
}

module.exports = { getBooks, getBook, createBook, updateBook, deleteBook };
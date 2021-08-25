// const books = require("../mock/books");
const { query } = require("../utils/db");
const db = require("../utils/db");






const getBooks = async () => {

    let books = []
    try {
        const query = await db.query('SELECT * FROM book')
        books = query.rows;
    } catch (error) {
        console.error(error)
    }
    return books;
}





const getBook = async (paramsId) => {
    let book = []
    try {
        const query = await db.query('SELECT * FROM book WHERE id = $1', [paramsId])
        book = query.rows;
    } catch (error) {
        console.error(error)
    }
    return book;
}






const createBook = async (newBook) => {
    let books = []
    const newTitle = newBook.title;
    const newAuthor = newBook.author;
    const newYear = newBook.year;
    const newPrice = newBook.price;
    const newStock = newBook.stock;
    try {
        await db.query('INSERT INTO book (title, author, year, price, stock) VALUES ($1,$2,$3,$4,$5)', [newTitle, newAuthor, newYear, newPrice, newStock])
        books = await getBooks()
    } catch (error) {
        console.error(error)
    }
    return books;
}




const updateBook = async (paramsId, updatedBook) => {
    let books = []
    const updatedTitle = updatedBook.title;
    try {
        await db.query('UPDATE book SET title = $1 WHERE id = $2', [updatedTitle, paramsId]);
        books = await getBooks()
    } catch (error) {
        console.error(error)
    }

    return books;
}


const deleteBook = async (paramsId) => {
    let books = []
    try {
        await db.query('DELETE FROM book WHERE id = $1', [paramsId])
        books = await getBooks()
    } catch (error) {
        console.error(error)
    }

    return books
}

module.exports = { getBooks, getBook, createBook, updateBook, deleteBook };
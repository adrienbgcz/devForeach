const Pool = require("pg").Pool

const db = new Pool({
    user : "postgres",
    host : "localhost", 
    database : "exam-todo-api",
    password : "postgres",
    port : 5432
})

module.exports = db;












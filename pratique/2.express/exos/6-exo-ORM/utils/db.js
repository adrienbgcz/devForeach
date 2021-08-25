const Pool = require("pg").Pool

const db = new Pool({
    user : "postgres",
    host : "localhost", 
    database : "library",
    password : "postgres",
    port : 5432
})

module.exports = db
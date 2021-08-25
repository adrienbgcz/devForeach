const db = require("../utils/db");


const getTodos = async () => {
    let todos = []
    try {
        const query = await db.query('SELECT * FROM todo')
        todos = query.rows;
    } catch (error) {
        console.error(error)
    }
    return todos;
}


const getTodo = async (paramsId) => {
    let todo = []
    try {
        const query = await db.query('SELECT * FROM todo WHERE id = $1', [paramsId])
        todo = query.rows;
    } catch (error) {
        console.error(error)
    }
    return todo;
}


const getTodosRestants = async () =>{
    let todosRestants = []
    try {
        const query = await db.query('SELECT * FROM todo WHERE termine = false')
        todosRestants = query.rows;
    } catch (error) {
        console.error(error)
    }
    return todosRestants;
}

const getTodosByEtiquette = async (etiquetteId) =>{
    let todosParEtiquette = []
    try {
        const query = await db.query('SELECT todo.nom, todo.description, todo.termine, todo.date_fin, etiquette.nom AS etiquette FROM todo JOIN todo_etiquette ON todo.id = todo_etiquette.id_todo JOIN etiquette ON todo_etiquette.id_etiquette = etiquette.id WHERE etiquette.id = $1', [etiquetteId])
        todosParEtiquette = query.rows;
    } catch (error) {
        console.error(error)
    }
    return todosParEtiquette;
}


const createTodo = async (todo) => {
    let todos = []
    const nomTodo = todo.nom;
    const descriptionTodo = todo.description;
    const termineTodo = todo.termine;
    const dateFinTodo = todo.date_fin;
    try {
        await db.query('INSERT INTO todo (nom, description, termine, date_fin) VALUES ($1, $2, $3, $4)', [nomTodo, descriptionTodo, termineTodo, dateFinTodo]);
        todos = await getTodos()
    } catch (error) {
        console.error(error)
    }
    return todos;
}


const updateTodo = async (paramsId, todo) => {
    let todos = []
    const nomTodo = todo.nom;
    const descriptionTodo = todo.description;
    const termineTodo = todo.termine;
    const dateFinTodo = todo.date_fin;
    try {
        await db.query('UPDATE todo SET nom = $1, description = $2, termine = $3, date_fin = $4 WHERE id = $5', [nomTodo, descriptionTodo, termineTodo, dateFinTodo, paramsId]);
        todos = await getTodos()
    } catch (error) {
        console.error(error)
    }
    return todos;
}

// const addEtiquetteOnTodo = async (idEtiquette, idTodo) => {
//     let todos = []
//     try {
//         await db.query('INSERT INTO todo_etiquette (id_todo, id_etiquette) VALUES ($1, $2)', [idEtiquette, idTodo]);
//         todos = await getTodos()
//     } catch (error) {
//         console.error(error)
//     }
//     return todos;
// }


const deleteTodo = async (paramsId) => {
    let todos = []
    try {
        await db.query('DELETE FROM todo WHERE id = $1', [paramsId])
        todos = await getTodos()
    } catch (error) {
        console.error(error)
    }

    return todos
}




module.exports = { getTodos, getTodo, createTodo, updateTodo, deleteTodo, getTodosRestants, getTodosByEtiquette};
const express = require("express");
const router = express.Router();
const todoService = require('../service/todoService');




router.get("/", async (req, res) => {
    
        const order = req.query.order;
        const etiquetteId = req.query.etiquetteId
        let filteredTodos = [];
    
        switch (order) {
            case 'restants': // http://localhost:9005/todos?order=restants
                try {
                    filteredTodos = await todoService.getTodosRestants()
                } catch (error) {
                    console.error(error)
                    res.status(500).send('Internal server error')
                }
                res.json(filteredTodos)
                break;
            
            case 'byEtiquette': // http://localhost:9005/todos?order=byEtiquette&etiquetteId=1
            try {
                filteredTodos = await todoService.getTodosByEtiquette(etiquetteId)
            } catch (error) {
                console.error(error)
                res.status(500).send('Internal server error')
            }
            res.json(filteredTodos)
            break;

            default :
                let todos = [];
                try {
                todos = await todoService.getTodos();
            
                } catch (error) {
                console.error(error)
                res.status(500).send('Internal server error')
                }
                res.json(todos);
            }
  });




  router.get("/:id", async (req, res) => {
    let todo = [];
    let paramsId = req.params.id
    try {
      todo = await todoService.getTodo(paramsId);
  
    } catch (error) {
      console.error(error)
      res.status(500).send('Internal server error')
    }
    res.json(todo);
  });



router.post("/", async (req, res) => {
  
  const { todo } = req.body;
    
  let todos = [];
  try {
    todos = await todoService.createTodo(todo)
  } catch (error) {
    console.error(error)
    res.status(500).send('Internal server error')
  }
  res.json(todos);
});


// Ajouter une étiquette à un todo A FINIR

// router.post("/:id", async (req, res) => {
//     const { todoId } = req.params
//     const { todoEtiquette } = req.body;
//     let todos = [];
//     try {
//       todos = await todoService.addEtiquetteOnTodo(todoId)
//     } catch (error) {
//       console.error(error)
//       res.status(500).send('Internal server error')
//     }
//     res.json(todos);
//   });




router.put("/:id", async (req, res) => {
  const { todo } = req.body;
  const paramsId = parseInt(req.params.id);
  let todos = []
  try {
    todos = await todoService.updateTodo(paramsId, todo)
  } catch (error) {
    console.error(error)
    res.status(500).send('Internal server error')
  }

  res.json(todos);
});


router.delete("/:id", async (req, res) => {
  let todos = []
  const paramsId = parseInt(req.params.id);

  try {
    todos = await todoService.deleteTodo(paramsId)
  } catch (error) {
    console.error(error)
    res.status(500).send('Internal server error')
  }
  res.json(todos);
});






  module.exports = router;
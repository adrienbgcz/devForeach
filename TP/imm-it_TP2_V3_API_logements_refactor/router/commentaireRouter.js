const express = require("express");
const router = express.Router();

const commentaireService = require('../service/commentaireService');
const commentaireRules = require('../utils/middleware/validation/commentaireRules')
const validate = require('../utils/middleware/validation/validate')



router.get("/", async (req, res) => {
  let commentaires = [];
  try {
    commentaires = await commentaireService.getCommentaires();

  } catch (error) {
    console.error(error)
    res.status(500).send('Internal server error')
  }
  res.json(commentaires);
});


router.get("/:id", async (req, res) => {
  let commentaire = [];
  let paramsId = req.params.id
  try {
    commentaire = await commentaireService.getCommentaire(paramsId);

  } catch (error) {
    console.error(error)
    res.status(500).send('Internal server error')
  }
  res.json(commentaire);
});



router.post("/", commentaireRules(), validate,

  async (req, res) => {
    const { commentaire } = req.body;

    let commentaires = [];
    try {
      commentaires = await commentaireService.createCommentaire(commentaire)
    } catch (error) {
      console.error(error)
      res.status(500).send('Internal server error')
    }

    res.json(commentaires);
  });






router.put("/:id", commentaireRules(), validate,

async (req, res) => {
  const { commentaire } = req.body;
  const paramsId = parseInt(req.params.id);
  let commentaires = []
  try {
    commentaires = await commentaireService.updateCommentaire(paramsId, commentaire)
  } catch (error) {
    console.error(error)
    res.status(500).send('Internal server error')
  }

  res.json(commentaires);
});



router.delete("/:id", async (req, res) => {
  let commentaires = []
  const paramsId = parseInt(req.params.id);

  try {
    commentaires = await commentaireService.deleteCommentaire(paramsId)
  } catch (error) {
    console.error(error)
    res.status(500).send('Internal server error')
  }

  res.json(commentaires);
});



module.exports = router;
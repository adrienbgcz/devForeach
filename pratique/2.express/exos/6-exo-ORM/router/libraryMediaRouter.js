const express = require("express");
const router = express.Router();
const libraryMediaServices = require('../service/libraryMediaService');


router.post('/', async (req, res) => {
    
const newMedia = req.body.newMedia;
const libraryId = newMedia.libraryId;
const mediaId = newMedia.mediaId;
const mediaType = newMedia.type;

    try {
      await libraryMediaServices.addMedia(libraryId, mediaId, mediaType)
    } catch (error) {
      console.error(error)
      res.status(500).send('Internal server error')
    }
  
  })



// router.get('/', async (req, res) => {

// })
 




module.exports = router;
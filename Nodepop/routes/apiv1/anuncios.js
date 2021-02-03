'use strict';
var express = require('express');
var router = express.Router();
const Article = require('../../models/Anuncio');






/* GET /apiv1/anuncios*/

router.get('/', async function(req, res, next) {

  try {
      const result = await Article.find();
      res.json(result);
  } catch (err) {
    
      next(err);
  }
  
});

/* POST /apiv1/anuncios*/
// Creamos un nuevo artículo con POST
router.post('/', async (req, res, next) => {
  try {
    const newArticle = req.body; 
    const addArticle = new Article(newArticle);
    const createdArticle = await addArticle.save(); //guardamos en la BBDD

    res.status(201).json({result: createdArticle});

  } catch (err) {
    next(err);
  }
});

module.exports = router;

var express = require('express');
var router = express.Router();
const Article = require('../models/Anuncio');

const {query,validationResult} = require('express-validator');

/* GET home page. */
router.get('/', async function(req, res, next) {

  try {
    const tag = req.query.tag;
    const buy = req.query.buy;
    const filter = {};// Si le pasamos el objeto literal vacío, nos mostrará todos los artículos.

    if (tag){
      filter.tags = tag;
    }
    if (buy){
      filter.buy = buy;
    }
    

   
    //Capturamos los datos de la BBDD
    res.locals.articles = await Article.find(filter);
    res.render('index', { title: 'Express' });
  
  } catch (err) {
  

    next(err);
  }
  

 
});

module.exports = router;



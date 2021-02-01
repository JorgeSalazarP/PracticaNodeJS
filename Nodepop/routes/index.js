var express = require('express');
var router = express.Router();
const Article = require('../models/Anuncio');

const {query,validationResult} = require('express-validator');

/* GET home page. */
router.get('/', async function(req, res, next) {

  try {

    //Capturamos los datos de la BBDD
    res.locals.articles = await Article.find();
    res.render('index', { title: 'Express' });
  } catch (err) {
  
    next(err);
  }
  

 
});

module.exports = router;

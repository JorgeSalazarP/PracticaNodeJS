var express = require('express');
var router = express.Router();
const Anuncio = require('../models/Anuncio');


/* GET home page. */
router.get('/',async function(req, res, next) {

  try {
    const tag = req.query.tag;
    const venta = req.query.venta;
    const limit = parseInt(req.query.limit);
    const skip = parseInt(req.query.skip);
    const sort = req.query.sort;
    const precio = req.query.precio;
    const nombre = req.query.nombre;
    const fields = req.query.fields;

    const filter = {};// Si le pasamos el objeto literal vacío, nos mostrará todos los artículos.

    if (tag){
      filter.tags = tag;
    }
    if (venta){
      filter.venta = venta;
    }
    
    if (precio) {
    
      const rankPrice = precio.split('-'); // Separa e ignora el signo -
      
      if(rankPrice.length === 2){

        if(rankPrice[0]!=='' && rankPrice[1]===''){ //precio 10-

          filter.precio = {'$gte': rankPrice[0]};

        } else if (rankPrice[0]==='' && rankPrice[1]!==''){ //precio -50

          filter.precio = {'$lte': rankPrice[1]};

        }else{ // precio 50-60

          filter.precio = {'$gte': rankPrice[0], '$lte': rankPrice[1]}
        }

      }

      if(rankPrice.length === 1){ // precio = 10;

        filter.precio=precio;
      }
      
    }

    if (nombre) {
      filter.nombre = new RegExp('^' + nombre, 'i');
    }

  
    res.locals.articles = await Anuncio.list(filter,limit,skip,sort,fields);

    
    if (res.locals.articles.length===0){ // Por si no encuentra ningún artículo

      return res.status(404).json({err: 'Not found'});
    
    }

    res.render('index',{
       title: 'Nodepop',
       age:new Date().getFullYear()
      }
    );
    
  } catch (err) {
    
  
    next(err);
  }
  

 
});

module.exports = router;



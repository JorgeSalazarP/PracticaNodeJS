'use strict';

const mongoose = require('mongoose');

// Creamos el esquema
const articleSchema = mongoose.Schema({
  nombre: {type:String,index:true},
  venta: {type: Boolean, index:true},
  precio: {type:Number,index:true},
  foto: String,
  tags: {type: [String], index: true}
});


articleSchema.statics.list = function(filter,limit,skip,sort) {

  const query = Anuncio.find(filter);
  query.limit(limit);
  query.skip(skip);
  query.sort(sort);
  

  return query.exec();


}

//Creamos el modelo con el esquema que acabamos de definir
const Anuncio = mongoose.model('Anuncio', articleSchema);

// y lo exportamos
module.exports = Anuncio;


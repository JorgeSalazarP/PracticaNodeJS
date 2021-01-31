'use strict';

const mongoose = require('mongoose');

// Creamos el esquema
const adSchema = mongoose.Schema({
  name: String,
  buy: Boolean,
  price: Number,
  picture: String,
  tags: {type: [String], index: true}
});


//Creamos el modelo con el esquema que acabamos de definir
const Anuncio = mongoose.model('Anuncio', adSchema)
// y lo exportamos
module.exports = Anuncio

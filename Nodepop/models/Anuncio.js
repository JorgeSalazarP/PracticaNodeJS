'use strict';

const mongoose = require('mongoose');

// Creamos el esquema
const anuncioSchema = mongoose.Schema({
  nombre: String,
  venta: Boolean,
  precio: Number,
  foto: String,
  tags: {type: [String], index: true}
});

//Creamos el modelo con el esquema que acabamos de definir
const Anuncio = mongoose.model('Anuncio', anuncioSchema);

module.exports = Anuncio;

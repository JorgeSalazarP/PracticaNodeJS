'use strict';

const mongoose = require('mongoose');

// Creamos el esquema
const articleSchema = mongoose.Schema({
  name: String,
  buy: Boolean,
  price: Number,
  picture: String,
  tags: {type: [String], index: true}
});


//Creamos el modelo con el esquema que acabamos de definir
const Article = mongoose.model('Anuncio', articleSchema);


articleSchema.statics.list = function(filter) {

  const query = Article.find(filter);
  return query.exec();


}



// y lo exportamos
module.exports = Article;


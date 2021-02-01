'use strict';

const fs = require('fs');
const Article = require('../models/Anuncio');

async function startDatabase(){
    
    try {
        require('./connectMongoose');// Primero comprobamos que conecte con la BBDD
        await Article.deleteMany();
        const data = JSON.parse(fs.readFileSync('./data/anuncios.json'),'utf-8');
        await Article.insertMany(data.anuncios);
       
    } catch (err) {
    
        next(err);
    }
    
}


startDatabase();
'use strict';

require('./connectMongoose');// Primero comprobamos que conecte con la BBDD

const fs = require('fs');
const Ad = require('../models/Anuncio');

startDatabase();

async function startDatabase(){
    
    try {

        await Ad.deleteMany();
        const dates = JSON.parse(fs.readFileSync('./data/anuncios.json'),'utf-8');
        await Ad.insertMany(dates.anuncios);
       
    } catch (error) {
    
        next(error);
    }
    
}



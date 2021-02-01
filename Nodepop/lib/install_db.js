'use strict';

const fs = require('fs');
const Ad = require('../models/Anuncio');

startDatabase();

async function startDatabase(){
    
    try {
        require('./connectMongoose');// Primero comprobamos que conecte con la BBDD
        await Ad.deleteMany();
        const dates = JSON.parse(fs.readFileSync('./data/anuncios.json'),'utf-8');
        await Ad.insertMany(dates.anuncios);
       
    } catch (error) {
    
        next(error);
    }
    
}



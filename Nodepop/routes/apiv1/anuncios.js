var express = require('express');
var router = express.Router();
const Anuncio = require('../../models/Anuncio');

/* GET /apiv1/anuncios*/
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
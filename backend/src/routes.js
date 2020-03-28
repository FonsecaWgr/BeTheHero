const express = require('express');
const crypto = require('crypto');
const connection = require('./database/connection');
const ongController = require('./controllers/ongController');
const incidentController = require('./controllers/incidentController');
const profileController = require('./controllers/profileController');
const sessionController = require('./controllers/sessionController');



//desacoplando o modulo express.Router para a variavel routes
const routes = express.Router();


routes.get('/ongs', ongController.index);
routes.post('/ongs', ongController.create);

routes.get('/incidents', incidentController.index);
routes.post('/incidents', incidentController.create);
routes.delete('/incidents/:id', incidentController.delete);

routes.get('/profile', profileController.index);

routes.post('/sessions', sessionController.create);

//exportando o routes para os outros arquivos terem acesso a ele
module.exports = routes;
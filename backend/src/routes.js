const express = require('express');
const routes = express.Router();
const ongController = require('./controllers/OngController')
const incidentController = require('./controllers/IncidentController');
const profileController = require('./controllers/ProfileController')
const sessionController = require('./controllers/SessionController');

// Ongs routes
routes.get('/ongs', ongController.index);
routes.post('/ongs', ongController.create);

// Incidents routes
routes.post('/incidents', incidentController.create);
routes.get('/incidents', incidentController.index);
routes.delete('/incidents/:id', incidentController.delete);

routes.post('/sessions', sessionController.create);
routes.get('/profile', profileController.index);

module.exports = routes;
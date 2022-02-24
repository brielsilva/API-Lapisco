const { Router } = require('express');
const ContactController = require('./app/controllers/ContactController');
const multerConfig = require('./app/config/multerConfig');
const multer = require('multer');

const routes = Router();

routes.get('/contacts',ContactController.index);
routes.get('/contacts/:id',ContactController.show);
routes.post('/contacts',multer(multerConfig).single('picture'),ContactController.store);
routes.put('/contacts/:id',ContactController.update);
routes.delete('/contacts/:id',ContactController.delete);


module.exports = routes;


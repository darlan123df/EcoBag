const express = require('express');

const LojasController = require('./Controlles/LojasController');
const UsuariosController = require('./Controlles/UsuariosController');

const routes = express.Router();

//Lojas
routes.post('/lojas',LojasController.cadastrarLojas);
routes.get('/lojas', LojasController.listaLojas);

//usuarios
routes.post('/usuarios', UsuariosController.cadastrarUsuarios);
routes.get('/usuarios', UsuariosController.listarUsuarios);

module.exports = routes;
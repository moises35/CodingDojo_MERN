const express = require('express');
const productControllers = require('./../controllers/products.controller')
const routes = express.Router()

// Rutas
routes.get('/all', productControllers.findAllProducts);
routes.post('/add', productControllers.addProduct);

module.exports = routes
const express = require('express');
const productControllers = require('./../controllers/products.controller')
const routes = express.Router()

// Rutas
routes.get('/all', productControllers.findAllProducts);
routes.get('/:id', productControllers.findProductID);
routes.post('/add', productControllers.addProduct);

module.exports = routes
const express = require('express');
const router = express.Router();

// Importar controlador
const authorController = require('../controllers/author.controller');

// Rutas
router.get('/all', authorController.findAllAuthors);
router.get('/:id', authorController.findOneAuthor);
router.post('/new', authorController.createAuthor);
router.put('/update/:id', authorController.updateAuthor);
router.delete('/delete/:id', authorController.deleteAuthor);

// Exportar rutas
module.exports = router;
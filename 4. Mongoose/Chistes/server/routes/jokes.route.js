const express = require('express');
const router = express.Router();
const controllersJokes = require('./../controllers/jokes.controller');

router.get('/jokes', controllersJokes.findAllBromas);
router.get('/jokes/random', controllersJokes.randomBroma);
router.get('/jokes/:id', controllersJokes.findBromasID);
router.post('/jokes/new', controllersJokes.createBroma);
router.put('/jokes/update/:id', controllersJokes.updateBroma);
router.delete('/jokes/delete/:id', controllersJokes.deleteBroma);

module.exports = router;
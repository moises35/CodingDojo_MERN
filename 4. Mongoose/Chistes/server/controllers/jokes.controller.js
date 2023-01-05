const broma = require('./../models/jokes.model');

// Obtener todos los chistes
const findAllBromas = (req, res) => {
    broma.find()
        .then(result => res.json({ broma: result }))
        .catch(error => res.json({ message: "Ha ocurrido un error", error: error }))
}

// Obtener una broma por su ID
const findBromasID = (req, res) => {
    broma.findOne({ _id: req.params.id })
        .then(result => res.json({ broma: result }))
        .catch(error => res.json({ message: "Ha ocurrido un error", error: error }))
}

// Crear una broma
const createBroma = (req, res) => {
    broma.create(req.body)
        .then(result => res.json({ broma: result }))
        .catch(error => res.json({ message: "Ha ocurrido un error", error: error }))
}

// Obtener una broma de forma randomica
const randomBroma = (req, res) => {
    broma.find()
        .then(result => {
            const random = Math.floor(Math.random() * result.length);
            res.json({ broma: result[random] })
        })
        .catch(error => res.json({ message: "Ha ocurrido un error", error: error }))
}

// Actualizar una broma
const updateBroma = (req, res) => {
    broma.findOne ({ _id: req.params.id })
        .then(result => {
            result.setup = req.body.setup;
            result.punchline = req.body.punchline;
            return result.save();
        })
        .then(result => res.json({ broma: result }))
        .catch(error => res.json({ message: "Ha ocurrido un error", error: error }))
}

// Eliminar una broma
const deleteBroma = (req, res) => {
    broma.deleteOne({ _id: req.params.id })
        .then(result => res.json({ broma: result }))
        .catch(error => res.json({ message: "Ha ocurrido un error", error: error }))
}


module.exports = { 
    findAllBromas,
    findBromasID,
    createBroma,
    randomBroma,
    updateBroma,
    deleteBroma
}
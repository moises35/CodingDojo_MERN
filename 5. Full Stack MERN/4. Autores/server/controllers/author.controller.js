const author = require('../models/author.model');

// Obtener todos los autores de la bd
const findAllAuthors = (req, res) => {
    author.find() 
        .then(allAuthors => res.json({allAuthors}))
        .catch(err => res.status(400).json({message: "Algo salió mal", error: err}));
}

// Obtener un autor por id
const findOneAuthor = (req, res) => {
    author.findOne({_id: req.params.id})
        .then(oneAuthor => res.json({oneAuthor}))
        .catch(err => res.status(400).json({message: "Algo salió mal", error: err}));
}

// Crear un autor
const createAuthor = (req, res) => {
    const {name} = req.body;
    author.create({name})
        .then(newAuthor => res.json({newAuthor}))
        .catch(err => res.status(400).json({message: "Algo salió mal", error: err}));
}

// Actualizar un autor
const updateAuthor = (req, res) => {
    author.findOneAndUpdate({_id: req.params.id }, req.body , {new: true, runValidators: true})
        .then(updatedAuthor => res.json({updatedAuthor}))
        .catch(err => res.status(400).json({message: "Algo salió mal", error: err}));
}

// Eliminar un autor
const deleteAuthor = (req, res) => {
    author.deleteOne({_id: req.params.id})
        .then(result => res.json({result}))
        .catch(err => res.status(400).json({message: "Algo salió mal", error: err}));
}

module.exports = {
    findAllAuthors,
    findOneAuthor,
    createAuthor,
    updateAuthor,
    deleteAuthor
}

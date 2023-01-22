const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AuthorSchema = new Schema({
    name: {
        type: String,
        required: [true, "El campo name es requerido"],
        minlength: [3, "El campo name debe tener al menos 3 caracteres"],
    }
}, { timestamps: true });

const author = mongoose.model('authors', AuthorSchema)
module.exports = author;
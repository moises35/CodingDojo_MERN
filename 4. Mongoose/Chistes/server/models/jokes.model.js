const mongoose = require('mongoose')
const Schema = mongoose.Schema

const JokeSchema = new Schema({
    setup: {
        type: String,
        required: [true, "El campo setup es requerido"],
        minlength: [10, "Minimo 10 caracteres"]
    },
    punchline: {
        type: String,
        required: [true, "El campo punchline es requerido"],
        minlength: [3, "Minimo 3 caracteres"]
    }
});

const broma = mongoose.model('broma', JokeSchema)
module.exports = broma;
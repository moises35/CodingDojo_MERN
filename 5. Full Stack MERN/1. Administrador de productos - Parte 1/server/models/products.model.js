const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductSchemma = new Schema({
    title: {
        type: String,
        required: [true, "El campo title es requerido"],
    },
    price: {
        type: String,
        required: [true, "El campo price es requerido"],
    },
    description: {
        type: String,
        required: [true, "El campo description es requerido"],
    }
});

const product = mongoose.model('product', ProductSchemma)
module.exports = product;
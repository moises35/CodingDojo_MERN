const product = require('./../models/products.model');

// Agregar un producto
const addProduct = (req, res)=> {
    const {title, price, description} = req.body;
    product.create({title, price, description})
        .then(result => res.json({ data: result }))
        .catch(error => res.json({ message: "Ha ocurrido un error", error: error }))
}

// Obtener todos los productos
const findAllProducts = (req, res) => {
    product.find()
        .then(result => res.json({ data: result }))
        .catch(error => res.json({ message: "Ha ocurrido un error", error: error }))
}

// Obtener un producto por su ID
const findProductID = (req, res) => {
    product.findOne({ _id: req.params.id })
        .then(result => res.json({ data: result }))
        .catch(error => res.json({ message: "Ha ocurrido un error", error: error }))
}

module.exports = {
    findAllProducts,
    addProduct,
    findProductID
}
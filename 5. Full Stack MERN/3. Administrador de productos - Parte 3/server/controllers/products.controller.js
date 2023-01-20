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

// Actualizar un producto por su ID
const updateProductID = (req, res) => {
    // Extraemos los datos price, title, description
    const {price, title, description} = req.body;

    // Actualizamos el producto
    product.updateOne({ _id: req.params.id }, { price, title, description })
        .then(result => res.json({ data: result }))
        .catch(error => res.json({ message: "Ha ocurrido un error", error: error }))
}

// Eliminamos un producto por su ID
const deleteProductID = (req, res) => {
    product.deleteOne({ _id: req.params.id })
        .then(result => res.json({ data: result }))
        .catch(error => res.json({ message: "Ha ocurrido un error", error: error }))
}


module.exports = {
    findAllProducts,
    addProduct,
    findProductID,
    updateProductID,
    deleteProductID
}
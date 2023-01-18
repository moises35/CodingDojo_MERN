const mongoose = require('mongoose');
const mongodb = {
    host: 'localhost',
    user: '',                   
    password: '',               
    database: 'productos',
    port: 27017 
}

mongoose.set('strictQuery', true);

const connection = mongoose.connect(`mongodb://${mongodb.host}:${mongodb.port}/${mongodb.database}`)
    .then((db) => {
        console.log('Conexión exitosa')
    }).catch((err) => {
        console.log('Ha ocurrido un error: ', + err)
    })

module.exports = connection
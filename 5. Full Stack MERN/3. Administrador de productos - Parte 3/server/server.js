const express = require('express');
const cors = require('cors')
const app = express();
const port = 8000;

// Importar base de datos
require('./config/mongoose.config');

// Middlewares
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended: true}))

// Rutas
const routeProducts = require('./routes/products.route');
app.use('/product', routeProducts);

app.listen(port, ()=> {
    console.log(`Server running in port: ${port}`)
})
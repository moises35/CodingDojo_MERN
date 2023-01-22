const express = require('express');
const app = express();
const cors = require('cors');
const port = 8000;
const authorRoutes = require('./routes/author.route');

// Configuración de la base de datos
require('./config/mongoose.config');

// Middlewares
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Importar rutas
app.use('/api/authors', authorRoutes);

// Listen server
app.listen(port, () => { 
    console.log(`Server listening on port ${port}`);
});
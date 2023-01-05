const express = require('express');
const app = express();
const port = 3300;
const rutasBromas = require('./routes/jokes.route');

// Importar base de datos
require('./config/mongoose.config');

// Middleware
app.use(express.json(), express.urlencoded({ extended: true }));

// Rutas
app.use('/api',rutasBromas);

// Server listen
app.listen(port, () => {
    console.log(`Server running in port ${port}`);
});
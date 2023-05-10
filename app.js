const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const ejs = require('ejs');

// Configuración de la base de datos
mongoose.connect('mongodb://localhost/ecommerce', { useNewUrlParser: true, useUnifiedTopology: true });

// Configuración de middleware
app.use(bodyParser.json());
app.use(cors());

// Configuración de las rutas
const productRoutes = require('./routes/routes');
app.use('/', productRoutes);

// Arranque del servidor
app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});

// Configuración del motor de vistas
app.set('views', './views');
app.set('view engine', 'ejs');

// Rutas de la aplicación
app.get('/', (req, res) => {
  res.render('index', { title: 'Página de inicio' });
});

// Inicio del servidor
app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});
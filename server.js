const indexRouter = require('./routes/index');

app.use('/', indexRouter);

const express = require('express');
const app = express();

require('dotenv').config();

// Ruta principal
app.get('/', (req, res) => {
  res.render('index', { title: 'Inicio' });
});

// Ruta para la sección "Nosotros"
app.get('/nosotros', (req, res) => {
  res.render('nosotros', { title: 'Nosotros' });
});

// Ruta para la sección "Productos"
app.get('/productos', (req, res) => {
  res.render('productos', { title: 'Productos' });
});

// Ruta para la sub-sección "Cajas de Cerámica" dentro de la sección "Productos"
app.get('/productos/cajas-ceramica', (req, res) => {
  res.render('cajas-ceramica', { title: 'Cajas de Cerámica' });
});

// Ruta para la sub-sección "Separadores" dentro de la sección "Productos"
app.get('/productos/separadores', (req, res) => {
  res.render('separadores', { title: 'Separadores' });
});

// Ruta para la sección "Contacto"
app.get('/contacto', (req, res) => {
  res.render('contacto', { title: 'Contacto' });
});

// Puerto de escucha del servidor
app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});

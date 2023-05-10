const mongoose = require('mongoose');

// Conexión con la base de datos MongoDB
mongoose.connect('mongodb://localhost/ecommerce_db', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conexión establecida con la base de datos'))
  .catch((err) => console.error('Error al conectar con la base de datos: ' + err.message));

module.exports = mongoose.connection;

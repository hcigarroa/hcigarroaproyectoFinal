const mongoose = require('mongoose');
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://hcigarroa:<password>@purocorazon.cu78soc.mongodb.net/?retryWrites=true&w=majority";
const { Sequelize, DataTypes } = require('sequelize');
const db = require('../config/db');
const Product = require('./models/product');


// Definición del esquema de la colección de productos
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: false },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  image: { type: String, required: false }
});

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });

  async function run() {
    try {
      // Connect the client to the server	(optional starting in v4.7)
      await client.connect();
      // Send a ping to confirm a successful connection
      await client.db("admin").command({ ping: 1 });
      console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
  }
  run().catch(console.dir);
  

  const Product = db.define('product', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: Sequelize.STRING(100),
      allowNull: false
    },
    description: {
      type: Sequelize.STRING(255),
      allowNull: false
    },
    price: {
      type: Sequelize.DECIMAL(10, 2),
      allowNull: false
    },
    image: {
      type: Sequelize.STRING(255),
      allowNull: false
    }
  });

  sequelize.sync()
  .then(() => {
    console.log('Database and tables created!');
  })
  .catch((err) => {
    console.log(err);
  });

  module.exports = sequelize;

  module.exports = Product;
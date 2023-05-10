const Product = require('../models/product');
const { Product } = require('../models');

// Controlador para crear un nuevo producto
exports.createProduct = async (req, res) => {
  try {
    const { name, description, price, category, image } = req.body;
    const product = new Product({ name, description, price, category, image });
    const savedProduct = await product.save();
    res.json(savedProduct);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Error al crear el producto');
  }
};

// Obtener productos

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtener Producto por Id

exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// Obtener Nuevo Producto
exports.addProduct = async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    const savedProduct = await newProduct.save();
    res.json(savedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const productController = {
  index: async (req, res) => {
    try {
      const products = await Product.findAll();
      res.render('products/index', { products });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Error interno del servidor' });
    }
  },
  show: async (req, res) => {
    try {
      const { id } = req.params;
      const product = await Product.findByPk(id);
      res.render('products/show', { product });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Error interno del servidor' });
    }
  }
};

module.exports = productController;
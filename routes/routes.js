const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');

const productController = require('../controllers/productController');

// Rutas para la gestión de productos
router.post('/products', productController.createProduct);
router.get('/products', productController.getProducts);
router.get('/products/:id', productController.getProduct);
router.put('/products/:id', productController.updateProduct);
router.delete('/products/:id', productController.deleteProduct);
router.get('/products/:id', productController.getProductById);
router.post('/products', productController.addProduct);
router.get('/', homeController.getHomePage);
router.get('/productos', productController.index);
router.get('/productos/:id', productController.show);


module.exports = router;

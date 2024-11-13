const express = require('express');
const { getProducts, createProduct, deleteProduct } = require('../controller/productController');
const { authenticate } = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/', getProducts);
router.post('/', authenticate, createProduct);
router.delete('/:id', authenticate, deleteProduct);

module.exports = router;

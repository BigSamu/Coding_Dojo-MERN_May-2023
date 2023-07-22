const express = require('express');
const { getAllProducts, getProduct, createProduct, editProduct, deleteProduct } = require('../controllers/products.controller');

const router = express.Router()

router.get('/', getAllProducts);
router.get('/:id/', getProduct);
router.put('/:id/', editProduct);
router.delete('/:id/', deleteProduct);
router.post('/', createProduct);

module.exports.productRouter = router
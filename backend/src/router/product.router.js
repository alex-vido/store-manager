const express = require('express');
const { productController } = require('../controllers');

const route = express.Router();

route.get(
  '/',
  productController.getAllProducts,
);

route.get(
  '/:id',
  productController.getProductById,
);

route.post(
  '/',
  productController.postProduct,
);

route.put(
  '/:id',
  productController.updateProduct,
);

route.delete(
  '/:id',
  productController.deleteProduct,
);

module.exports = route;
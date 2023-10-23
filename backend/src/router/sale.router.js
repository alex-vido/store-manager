const express = require('express');
const { saleController } = require('../controllers');
const { 
  validateProductIdExists, 
  validateQuantityExists, 
  validadeQuantityIsZeroOrLessThanZero, 
  validateHaveProductsWithThisId,
} = require('../middlewares');

const route = express.Router();

route.get(
  '/',
  saleController.getAllSales,
);

route.get(
  '/:id',
  saleController.getSalesById,
);

route.post(
  '/',
  validateProductIdExists,
  validadeQuantityIsZeroOrLessThanZero,
  validateQuantityExists,
  validateHaveProductsWithThisId,
  
  saleController.postSale,
);

module.exports = route;
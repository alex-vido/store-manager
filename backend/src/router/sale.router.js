const express = require('express');
const { saleController } = require('../controllers');

const route = express.Router();

route.get(
  '/',
  saleController.getAllSales,
);

route.get(
  '/:id',
  saleController.getSalesById,
);

module.exports = route;
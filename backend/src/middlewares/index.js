const { 
  validateProductIdExists, 
  validateQuantityExists, 
  validadeQuantityIsZeroOrLessThanZero,
  validateHaveProductsWithThisId,
} = require('./validateSaleRegister');

module.exports = {
  validateProductIdExists,
  validateQuantityExists,
  validadeQuantityIsZeroOrLessThanZero,
  validateHaveProductsWithThisId,
};
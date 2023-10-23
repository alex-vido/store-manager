const { productModel } = require('../models');

const validateProductIdExists = (req, res, next) => {
  const data = req.body;
  
  const isMissingProductId = data.some((item) => item.productId === undefined);

  if (isMissingProductId) return res.status(400).json({ message: '"productId" is required' });
  console.log('passou');
  next();
};
const validateQuantityExists = (req, res, next) => {
  const data = req.body;
  const isMissingQuantity = data.some((item) => !item.quantity);
  if (isMissingQuantity) return res.status(400).json({ message: '"quantity" is required' });

  next();
};

const validadeQuantityIsZeroOrLessThanZero = (req, res, next) => {
  const data = req.body;
  const isQuantityEqualOrLessThanZero = data.some((item) => item.quantity <= 0);
  if (isQuantityEqualOrLessThanZero) {
    return res.status(422).json({ 
      message: '"quantity" must be greater than or equal to 1', 
    }); 
  }
  next();
};

const validateHaveProductsWithThisId = async (req, res, next) => {
  const products = await productModel.findAll();
  const productList = products.map((product) => product.id);
  const data = req.body;
  const allItemsHaveValidProduct = data.every((item) => productList.includes(item.productId));
  console.log(products);
  if (!allItemsHaveValidProduct) {
    return res.status(404).json({ message: 'Product not found' });
  }

  next();
};

module.exports = {
  validateProductIdExists,
  validateQuantityExists,
  validadeQuantityIsZeroOrLessThanZero,
  validateHaveProductsWithThisId,
};
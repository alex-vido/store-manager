const { productModel } = require('../models');

const productExists = async (id) => {
  const data = await productModel.findById(id);
  if (!data) {
    return { status: 404, data: { message: 'Product not found' } }; 
  }
  return { status: 200, data };
};

const productsExists = async () => {
  const data = await productModel.findAll();
  return { status: 200, data };
};

module.exports = {
  productExists,
  productsExists,
};  
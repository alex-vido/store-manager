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

const productRegisterOk = async (name) => {
  if (!name) {
    return { status: 400, data: { message: '"name" is required' } };
  }
  if (name.length < 5) {
    return { status: 422, data: { message: '"name" length must be at least 5 characters long' } };
  }
  const productData = await productModel.registerProduct(name);
  const data = await productModel.findById(productData.insertId);
  return { status: 201, data };
};

const updateProductOk = async (name, id) => {
  if (!name) {
    return { status: 400, data: { message: '"name" is required' } };
  }
  if (name.length < 5) {
    return { status: 422, data: { message: '"name" length must be at least 5 characters long' } };
  }
  const data = await productModel.findById(id);

  if (!data) {
    return { status: 404, data: { message: 'Product not found' } };
  }

  const productData = await productModel.updateProduct(name, id);

  return { status: 200, productData };
};

module.exports = {
  productExists,
  productsExists,
  productRegisterOk,
  updateProductOk,
};  
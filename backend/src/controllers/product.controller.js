const { productService } = require('../services');

const getAllProducts = async (_req, res) => {
  const { status, data } = await productService.productsExists();
  return res.status(status).json(data);
};

const getProductById = async (req, res) => {
  const { id } = req.params;
  const { status, data } = await productService.productExists(id);
  return res.status(status).json(data);
};

module.exports = {
  getAllProducts,
  getProductById,
};
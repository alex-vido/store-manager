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

const postProduct = async (req, res) => {
  const { name } = req.body;
  const { status, data } = await productService.productRegisterOk(name);
  return res.status(status).json(data);
};

const updateProduct = async (req, res) => {
  const { name } = req.body;
  const { id } = req.params;
  const { status, data } = await productService.updateProductOk(name, id);
  if (status === 404 || status === 422 || status === 400) return res.status(status).json(data);

  return res.status(status).json({
    id: Number(id),
    name,
  });
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  const { status, data } = await productService.deleteProductOk(id);
  if (status === 404) return res.status(status).json(data);

  return res.status(204).json(data);
};

module.exports = {
  getAllProducts,
  getProductById,
  postProduct,
  updateProduct,
  deleteProduct,
};
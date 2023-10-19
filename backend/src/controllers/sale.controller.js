const { saleService } = require('../services');

const getAllSales = async (_req, res) => {
  const { status, data } = await saleService.AllSalesExists();
  return res.status(status).json(data);
};

const getSalesById = async (req, res) => {
  const { id } = req.params;
  const { status, data } = await saleService.SaleExist(id);
  return res.status(status).json(data);
};

const postSale = async (req, res) => {
  const { body } = req;
  const { status, data } = await saleService.saleRegisterOk(body);
  return res.status(status).json(data);
};

module.exports = {
  getAllSales,
  getSalesById,
  postSale,
};
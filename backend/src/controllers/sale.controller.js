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

module.exports = {
  getAllSales,
  getSalesById,
};
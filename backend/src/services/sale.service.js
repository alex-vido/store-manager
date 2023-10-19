const { saleModel } = require('../models');

const SaleExist = async (id) => {
  const data = await saleModel.findByIdSale(id);
  if (!data || data.length === 0) {
    return { status: 404, data: { message: 'Sale not found' } }; 
  }
  return { status: 200, data };
};

const AllSalesExists = async () => {
  const data = await saleModel.findAllSales();
  return { status: 200, data };
};

module.exports = {
  SaleExist,
  AllSalesExists,
};  
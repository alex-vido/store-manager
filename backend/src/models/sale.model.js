const camelize = require('camelize');
const connection = require('./connection');

const findAllSales = async () => {
  const [sales] = await connection.execute(
    'SELECT s.id AS saleId, s.date, sp.product_id AS productId, sp.quantity '
    + 'FROM sales s '
    + 'JOIN sales_products sp ON s.id = sp.sale_id '
    + 'ORDER BY s.id ASC, sp.product_id ASC',
  );
  return camelize(sales);
};

const findByIdSale = async (id) => {
  const [sale] = await connection.execute(
    'SELECT s.date, sp.product_id AS productId, sp.quantity '
    + 'FROM sales s '
    + 'JOIN sales_products sp ON s.id = sp.sale_id '
    + 'WHERE s.id = ? '
    + 'ORDER BY s.id ASC, sp.product_id ASC',
    [id],
  );
  return camelize(sale);
};

const registerSale = async () => {
  const [sale] = await connection.execute(
    'INSERT INTO sales VALUES ()',
  );
  return sale.insertId;
};

const registerSaleProduct = async (saleId, productId, quantity) => {
  const [sale] = await connection.execute(
    'INSERT INTO sales_products(sale_id, product_id, quantity) VALUES (?, ?, ?)',
    [saleId, productId, quantity],
  );
  return sale; 
};

module.exports = {
  findAllSales,
  findByIdSale,
  registerSale,
  registerSaleProduct,
};
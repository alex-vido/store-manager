const camelize = require('camelize');

const connection = require('./connection');

const findAll = async () => {
  const [products] = await connection.execute(
    'SELECT * FROM products',
  );
  return camelize(products);
};

const findById = async (id) => {
  const [[product]] = await connection.execute(
    'SELECT * FROM products WHERE id = ?',
    [id],
  );
  return camelize(product);
};

const registerProduct = async (name) => {
  const [product] = await connection.execute(
    'INSERT INTO products (name) VALUES (?)',
    [name],
  );
  return product;
};

module.exports = {
  findAll,
  findById,
  registerProduct,
};
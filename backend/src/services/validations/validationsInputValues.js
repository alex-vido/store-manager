const { addProductSchema } = require('./schemas');

const validateNewProduct = ({ id, name }) => {
  const { error } = addProductSchema
    .validate({ id, name });
  if (error) return { status: 'INVALID_VALUE', message: error.message };
};

module.exports = {
  validateNewProduct,
};
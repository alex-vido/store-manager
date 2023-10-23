const dates = '2023-10-19T00:42:45.000Z';

const allSalesDB = [
  {
    saleId: 1,
    date: dates,
    productId: 1,
    quantity: 5,
  },
  {
    saleId: 1,
    date: dates,
    productId: 2,
    quantity: 10,
  },
  {
    saleId: 2,
    date: dates,
    productId: 3,
    quantity: 15,
  },
];

const saleDB = [
  {
    date: dates,
    productId: 1,
    quantity: 5,
  },
  {
    date: dates,
    productId: 2,
    quantity: 10,
  },
];

const saleForAddDB = [
  {
    productId: 3,
    quantity: 1,
  },
  {
    productId: 2,
    quantity: 5,
  },
];

const saleWithoutProductId = [
  {
    quantity: 1,
  },
];

const saleWithoutQuantity = [
  {
    productId: 3,
  },
];

const saleWithQuantityZero = [
  {
    productId: 3,
    quantity: 0,
  },
];

const saleWithQuantityLessThanZero = [
  {
    productId: 3,
    quantity: -10,
  },
];

const saleWithProductIdNonExistent = [
  {
    productId: 13,
    quantity: 2,
  },
];

const saleWithoutProductIdError = { message: '"productId" is required' };

const saleWithoutQuantityError = { message: '"quantity" is required' };

const saleWithQuantityZeroError = { 
  message: '"quantity" must be greater than or equal to 1', 
};

const saleWithProductIdNonExistentError = { message: 'Product not found' };

module.exports = {
  allSalesDB,
  saleDB,
  saleForAddDB,
  saleWithoutProductId,
  saleWithoutProductIdError,
  saleWithoutQuantity,
  saleWithoutQuantityError,
  saleWithQuantityZero,
  saleWithQuantityZeroError,
  saleWithQuantityLessThanZero,
  saleWithProductIdNonExistent,
  saleWithProductIdNonExistentError,
};
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

module.exports = {
  allSalesDB,
  saleDB,
};
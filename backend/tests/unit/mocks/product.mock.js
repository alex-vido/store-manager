const AllproductsFromDB = [
  {
    id: 1,
    name: 'Martelo de Thor',
  },
  {
    id: 2,
    name: 'Traje de encolhimento',
  },
  {
    id: 3,
    name: 'Escudo do Capitão América',
  },
];

const productFromDB = {
  id: 1,
  name: 'Martelo de Thor',
};

const productAddDB = {
  id: 4,
  name: 'productX',
};

const productAddWithoutNameError = { message: '"name" is required' };

const productAddWithoutLengthError = { 
  message: '"name" length must be at least 5 characters long',
};

module.exports = {
  AllproductsFromDB,
  productFromDB,
  productAddDB,
  productAddWithoutNameError,
  productAddWithoutLengthError,
};
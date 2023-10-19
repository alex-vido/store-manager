const { expect } = require('chai');
const sinon = require('sinon');
const { productModel } = require('../../../src/models');
const { productMock } = require('../mocks');
const { productService } = require('../../../src/services');

describe('Testa o service de produtos', function () {
  afterEach(function () {
    sinon.restore();
  });

  const { AllproductsFromDB, productFromDB } = productMock;
  
  it('Lista todos os produtos', async function () {
    sinon.stub(productModel, 'findAll').resolves(AllproductsFromDB);
    const products = await productService.productsExists();
    console.log(products);
    expect(products).to.be.an('object');
    expect(products.status).to.be.equal(200);
    expect(products.data).to.be.deep.equal(AllproductsFromDB);
  });
  
  it('Recupera produto por id com sucesso', async function () {
    sinon.stub(productModel, 'findById').resolves(productFromDB);

    const inputData = 1;
    const product = await productService.productExists(inputData);

    expect(product).to.be.an('object');
    expect(product.data).to.be.deep.equal(productFromDB);
  });
});
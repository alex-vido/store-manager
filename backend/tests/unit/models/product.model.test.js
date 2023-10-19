const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/models/connection');
const { productModel } = require('../../../src/models');
const { productMock } = require('../mocks');

describe('Testa o model de produtos', function () {
  afterEach(function () {
    sinon.restore();
  });

  const { AllproductsFromDB, productFromDB, productAddDB } = productMock;

  it('Recupera produto por id com sucesso', async function () {
    sinon.stub(connection, 'execute').resolves([[productFromDB]]);

    const inputData = 1;
    const product = await productModel.findById(inputData);

    expect(product).to.be.an('object');
    expect(product).to.be.deep.equal(productFromDB);
  });  
  
  it('Retorna menssagem de erro quando não encontra produto', async function () {
    sinon.stub(connection, 'execute').resolves([[]]);

    const inputData = 23;
    const product = await productModel.findById(inputData);

    expect(product).to.deep.equal(undefined);
  });

  it('Recupera todos os produtos com sucesso', async function () {
    sinon.stub(connection, 'execute').resolves([AllproductsFromDB]);

    const product = await productModel.findAll();

    expect(product).to.be.an('array');
    expect(product).to.be.deep.equal(AllproductsFromDB);
  });

  it('Adiciona produto com sucesso', async function () {
    sinon.stub(connection, 'execute').resolves([productAddDB]);

    const product = await productModel.registerProduct('productX');

    expect(product).to.be.an('object');
    expect(product).to.be.deep.equal(productAddDB);
  });
});
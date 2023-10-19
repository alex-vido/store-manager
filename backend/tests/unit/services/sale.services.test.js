const { expect } = require('chai');
const sinon = require('sinon');
const { saleModel } = require('../../../src/models');
const { saleMock } = require('../mocks');
const { saleService } = require('../../../src/services');

describe('Testa o service de sales', function () {
  afterEach(function () {
    sinon.restore();
  });

  const { allSalesDB, saleDB } = saleMock;
  
  it('Lista todos os produtos', async function () {
    sinon.stub(saleModel, 'findAllSales').resolves(allSalesDB);
    const products = await saleService.AllSalesExists();
    console.log(products);
    expect(products).to.be.an('object');
    expect(products.status).to.be.equal(200);
    expect(products.data).to.be.deep.equal(allSalesDB);
  });

  it('Recupera sale por id com sucesso', async function () {
    sinon.stub(saleModel, 'findByIdSale').resolves(saleDB);

    const inputData = 1;
    const product = await saleService.SaleExist(inputData);

    expect(product).to.be.an('object');
    expect(product.data).to.be.deep.equal(saleDB);
  });
});
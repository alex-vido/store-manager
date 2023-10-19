const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/models/connection');
const { saleModel } = require('../../../src/models');
const { saleMock } = require('../mocks');

describe('Testa o model de sales', function () {
  afterEach(function () {
    sinon.restore();
  });

  const { allSalesDB, saleDB } = saleMock;

  it('Recupera todos os produtos com sucesso', async function () {
    sinon.stub(connection, 'execute').resolves([allSalesDB]);

    const product = await saleModel.findAllSales();

    expect(product).to.be.an('array');
    expect(product).to.be.deep.equal(allSalesDB);
  });

  it('Recupera sale por id com sucesso', async function () {
    sinon.stub(connection, 'execute').resolves([saleDB]);

    const inputData = 1;
    const product = await saleModel.findByIdSale(inputData);

    expect(product).to.be.an('array');
    expect(product).to.be.deep.equal(saleDB);
  });

  it('Retorna menssagem de erro quando não encontra sale', async function () {
    sinon.stub(connection, 'execute').resolves([]);

    const inputData = 23;
    const sale = await saleModel.findByIdSale(inputData);

    expect(sale).to.deep.equal(undefined);
  });
});
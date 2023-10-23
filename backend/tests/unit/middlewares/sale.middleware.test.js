const { expect } = require('chai');
const sinon = require('sinon');
const { saleMock } = require('../mocks');
const { productModel } = require('../../../src/models');
const { 
  validateProductIdExists,
  validateQuantityExists,
  validadeQuantityIsZeroOrLessThanZero,
  validateHaveProductsWithThisId,
} = require('../../../src/middlewares');

describe('Testa os middlewares de sales', function () {
  afterEach(function () {
    sinon.restore();
  });
  const { 
    allSalesDB,
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
  } = saleMock;

  it('Adiciona sale com sucesso', async function () {
    const request = { body: saleForAddDB };
    const response = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    const next = sinon.stub();

    await validateProductIdExists(request, response, next);

    expect(next).to.have.been.calledWith();
    // expect(next.called).to.be.equal(true);
  });
  it('Verifica se dá erro ao tentar adicionar sale sem productId', async function () {
    const request = { body: saleWithoutProductId };
    const response = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    const next = sinon.stub();

    await validateProductIdExists(request, response, next);

    expect(response.status).to.have.been.calledWith(400);
    expect(response.json).to.have.been.calledWith(saleWithoutProductIdError);
  });

  it('Verifica se dá erro ao tentar adicionar sale sem quantity', async function () {
    const request = { body: saleWithoutQuantity };
    const response = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    const next = sinon.stub();

    await validateQuantityExists(request, response, next);

    expect(response.status).to.have.been.calledWith(400);
    expect(response.json).to.have.been.calledWith(saleWithoutQuantityError);
  });

  it('Verifica se dá erro ao tentar adicionar sale com quantity 0', async function () {
    const request = { body: saleWithQuantityZero };
    const response = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    const next = sinon.stub();

    await validadeQuantityIsZeroOrLessThanZero(request, response, next);

    expect(response.status).to.have.been.calledWith(422);
    expect(response.json).to.have.been.calledWith(saleWithQuantityZeroError);
  });
  it('Verifica se dá erro ao tentar adicionar sale com quantity negativo', async function () {
    const request = { body: saleWithQuantityLessThanZero };
    const response = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    const next = sinon.stub();

    await validadeQuantityIsZeroOrLessThanZero(request, response, next);

    expect(response.status).to.have.been.calledWith(422);
    expect(response.json).to.have.been.calledWith(saleWithQuantityZeroError);
  });

  it('Verifica se dá erro ao tentar adicionar sale com productId Inexistente', async function () {
    const request = { body: saleWithProductIdNonExistent };
    const response = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    const next = sinon.stub();

    sinon.stub(productModel, 'findAll').resolves(allSalesDB);

    await validateHaveProductsWithThisId(request, response, next);

    expect(response.status).to.have.been.calledWith(404);
    expect(response.json).to.have.been.calledWith(saleWithProductIdNonExistentError);
  });
});
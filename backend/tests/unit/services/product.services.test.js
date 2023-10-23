const { expect } = require('chai');
const sinon = require('sinon');
const { productModel } = require('../../../src/models');
const { productMock } = require('../mocks');
const { productService } = require('../../../src/services');

describe('Testa o service de produtos', function () {
  afterEach(function () {
    sinon.restore();
  });

  const { AllproductsFromDB, productFromDB, productAddWithoutNameError, productAddWithoutLengthError } = productMock;
  
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

  it('Verifica se apresenta erro cadastrar sem name', async function () {
    sinon.stub(productModel, 'registerProduct').resolves(productAddWithoutNameError);

    const product = await productService.productRegisterOk('');

    expect(product).to.be.an('object');
    expect(product.data).to.be.deep.equal(productAddWithoutNameError);
  });

  it('Verifica se apresenta erro cadastrar com name menor que 5', async function () {
    sinon.stub(productModel, 'registerProduct').resolves(productAddWithoutLengthError);

    const product = await productService.productRegisterOk('as');

    expect(product).to.be.an('object');
    expect(product.data).to.be.deep.equal(productAddWithoutLengthError);
  });

  it('Verifica se apresenta erro ao atualizar produto com name menor que 5', async function () {
    sinon.stub(productModel, 'updateProduct').resolves('as', 1);

    const product = await productService.updateProductOk('as', 1);

    expect(product).to.be.an('object');
    expect(product.status).to.equal(422);
    expect(product.data).to.be.deep.equal(productAddWithoutLengthError);
  });
  
  it('Verifica se apresenta erro ao atualizar produto com name vazio', async function () {
    sinon.stub(productModel, 'updateProduct').resolves('', 1);

    const product = await productService.updateProductOk('', 1);

    expect(product).to.be.an('object');
    expect(product.status).to.equal(400);
    expect(product.data).to.be.deep.equal(productAddWithoutNameError);
  });
  it('Verifica se apresenta erro ao atualizar produto com id inexistente', async function () {
    const id = 16;
    sinon.stub(productModel, 'findById').withArgs(id).resolves(undefined);
  
    const updatedProduct = await productService.updateProductOk('Martelo do Hulk', id);
  
    expect(updatedProduct).to.be.an('object');
    expect(updatedProduct.status).to.equal(404);
    expect(updatedProduct.data.message).to.equal('Product not found');
  });
  it('Verifica se atualiza produto com sucesso', async function () {
    const id = 1;
    const name = 'Martelo do Hulk';
    const productUpdated = {
      id,
      name,
    };
    sinon.stub(productModel, 'findById').withArgs(id).resolves(productUpdated);
    sinon.stub(productModel, 'updateProduct').withArgs(name, id).resolves(productUpdated);
  
    const updatedProduct = await productService.updateProductOk(name, id);
  
    expect(updatedProduct).to.be.an('object');
    expect(updatedProduct.status).to.equal(200);
    expect(updatedProduct.productData).to.be.deep.equal(productUpdated);
  });
});
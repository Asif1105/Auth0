import mockAxios from 'jest-mock-axios';
import {
  getProducts,
  getOrders,
  placeOrder
} from './Connect';

const request = () => mockAxios.lastReqGet();

describe('Reports fetching operations', () => {
  let productsURL;
  let ordersURL;
  let options;
  let product;
  let response;
  beforeEach(() => {
    productsURL = 'http://localhost:5000/productListings';
    ordersURL  = 'http://localhost:5000/pastOrders';
    options = {
      headers : {
        'Content-Type' : 'application/json',
        'Accept'       : 'application/json' // eslint-disable-line quote-props
      }
    };
    product = {
      id          : 1,
      name        : 'Book 1',
      price       : 500,
      author      : 'Author 1',
      pages       : 1500,
      description : 'A short description about book 1'
    };
    response = {
      data : {
        id          : 1,
        name        : 'Book 1',
        price       : 500,
        author      : 'Author 1',
        pages       : 1500,
        description : 'A short description about book 1'
      }
    };
  });
  afterEach(() => {
    mockAxios.reset();
  });

  describe('getProducts', () => {
    test('should issue a GET Request', () => {
      getProducts(productsURL, options);
      expect(request().method).toEqual('get');
    });
    test('should invoke the expected endpoint via GET Request', () => {
      getProducts(productsURL, options);
      expect(request().url).toEqual(`${productsURL}`);
    });
    test('should define a getProducts function', () => {
      getProducts(productsURL, options);
      expect(getProducts).toBeInstanceOf(Function);
    });
    test('should return the expected output', async() => {
      const promise = getProducts(productsURL, options);
      mockAxios.mockResponse(response);
      const result = await promise;
      expect(result.data).toEqual(product);
    });
  });
});

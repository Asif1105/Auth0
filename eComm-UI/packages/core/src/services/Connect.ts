import axios from 'axios';

export const OPTIONS = {
  method      : 'GET',
  mode        : 'cors',
  cache       : 'no-cache',
  credentials : 'include',
  headers     : {
    'Content-Type' : 'application/xml'
  }
};
  
export const getProducts = (uri, options) => {
  const response = axios.get(uri, Object.assign({}, OPTIONS, options));
  return response;
};

export const placeOrder = (uri, products) => {
  const response = axios.post(uri, products);
  return response;
};

export const getOrders = (uri, options) => {
  const response = axios.get(uri, Object.assign({}, OPTIONS, options));
  return response;
};

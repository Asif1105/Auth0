import { getProducts as loadProducts } from '@shop/core/src/services';
import { Product } from '@shop/core/src/types';
import { options } from './helpers';

export const INITIALIZE_HOME    = 'INITIALIZE_HOME';
export const GET_PRODUCTS       = 'GET_PRODUCTS';
export const SET_PRODUCT_DETAIL = 'SET_PRODUCT_DETAIL';

const PRODUCTS_URL = 'http://localhost:5000/productListings';

export const getProducts = () => {
  return async(dispatch: Function, getState: Function) => {
    const response = await loadProducts(PRODUCTS_URL, options);
    dispatch({ type: GET_PRODUCTS, products: response?.data });
  };
};

export const setProductDetail = (product: Product) => ({
  type : SET_PRODUCT_DETAIL, product
});

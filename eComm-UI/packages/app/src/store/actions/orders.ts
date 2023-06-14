import { getOrders as loadOrders } from '@shop/core/src/services';
import { options } from './helpers';

export const INITIALIZE_ORDERS = 'INITIALIZE_ORDERS';
export const SET_ORDERS = 'SET_ORDERS';

export const ORDERS_URL = 'http://localhost:5000/pastOrders';

export const getOrders = () => {
  return async(dispatch: Function, getState: Function) => {
    const response = await loadOrders(ORDERS_URL, options);
    dispatch({ type: SET_ORDERS, products: response?.data });
  };
};

import { FormFieldType } from "@shop/app/src/pages/cart/shipping";
import { placeOrder } from "@shop/core/src/services";
import { ORDERS_URL, SET_ORDERS } from "./orders";
import { pushDate } from "./helpers";

export const INITIALIZE_CART = "INITIALIZE_CART";
export const SET_PRODUCTS = "SET_PRODUCTS";
export const SET_SHIPPING_INFO = "SET_SHIPPING_INFO";

export const setProducts = (products) => {
  return (dispatch: Function) => {
    dispatch({ type: SET_PRODUCTS, products });
  };
};

export const setShippingInfo = (values?: FormFieldType) => {
  return (dispatch: Function) => {
    dispatch({ type: SET_SHIPPING_INFO, values });
  };
};

export const checkout = () => {
  return async (dispatch: Function, getState: Function) => {
    const {
      cart: { items },
      orders: { orderedItems },
    } = getState();
    const cartItems = pushDate(items);
    const response = await placeOrder(
      ORDERS_URL,
      orderedItems?.length > 0
        ? [...cartItems, ...orderedItems]
        : [...cartItems]
    );
    dispatch({ type: SET_ORDERS, products: response?.data });
    return false;
  };
};

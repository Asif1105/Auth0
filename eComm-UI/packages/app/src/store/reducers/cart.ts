import produce from 'immer';
import {
  INITIALIZE_CART,
  SET_PRODUCTS,
  SET_SHIPPING_INFO
} from '../actions/cart';
import { CartState } from '@shop/app/src/pages/cart';
import { FormFields } from '@shop/app/src/pages/cart/shipping/Shipping';

// defines the initial state for the reducer ...
export const initialState: CartState = {
  isInitialized : false,
  item          : null,
  items         : [],
  shippingInfo  : {
    [FormFields.firstName] : {
      value    : 'Asif',
      error    : null,
      disabled : false,
      hasError : false
    },
    [FormFields.lastName] : {
      value    : 'Buhari',
      error    : null,
      disabled : false,
      hasError : false
    },
    [FormFields.email] : {
      value    : 'xyz@abc.com',
      error    : null,
      disabled : false,
      hasError : false
    },
    [FormFields.address] : {
      value    : 'Perumbakkam, Chennai',
      error    : null,
      disabled : false,
      hasError : false
    }
  }
};

// defines this reducers reducer functions ...
const reducers = {
  [INITIALIZE_CART] : (draft: CartState) => {
    draft.isInitialized = true;
  },
  [SET_PRODUCTS] : (draft: CartState, { products }) => {
    draft.items = products;
  },
  [SET_SHIPPING_INFO] : (draft: CartState, { values }) => {
    draft.shippingInfo = values;
  }
};

export default produce((draft: CartState = initialState, action) => {
  reducers?.[action.type]?.(draft, action);
  return draft;
});

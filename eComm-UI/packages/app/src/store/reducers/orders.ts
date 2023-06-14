import produce from 'immer';
import {
  INITIALIZE_ORDERS,
  SET_ORDERS
} from '../actions/orders';
import { OrderState } from '@shop/app/src/pages/orders';

// defines the initial state for the reducer ...
export const initialState: OrderState = {
  isInitialized : false,
  orderedItem   : null,
  orderedItems  : []
};

// defines this reducers reducer functions ...
const reducers = {
  [INITIALIZE_ORDERS] : (draft: OrderState) => {
    draft.isInitialized = true;
  },
  [SET_ORDERS] : (draft: OrderState, { products }) => {
    draft.orderedItems = products;
  }
};

export default produce((draft: OrderState = initialState, action) => {
  reducers?.[action.type]?.(draft, action);
  return draft;
});

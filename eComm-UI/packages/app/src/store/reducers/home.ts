import produce from 'immer';
import {
  INITIALIZE_HOME,
  GET_PRODUCTS,
  SET_PRODUCT_DETAIL
} from '../actions/home';
import { HomeState } from '@shop/app/src/pages/home';

// defines the initial state for the reducer ...
export const initialState: HomeState = {
  isInitialized : false,
  product       : null,
  products      : []
};

// defines this reducers reducer functions ...
const reducers = {
  [INITIALIZE_HOME] : (draft: HomeState) => {
    draft.isInitialized = true;
  },
  [GET_PRODUCTS] : (draft: HomeState, { products }) => {
    draft.products = products;
  },
  [SET_PRODUCT_DETAIL] : (draft: HomeState, { product }) => {
    draft.product = product;
  }
};

export default produce((draft: HomeState = initialState, action) => {
  reducers?.[action.type]?.(draft, action);
  return draft;
});

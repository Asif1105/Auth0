import { getCurrentDate } from '@shop/core/src/utils';

export const options = {
  headers : {
    'Content-Type' : 'application/json',
    'Accept'       : 'application/json' // eslint-disable-line quote-props
  }
};

export const pushDate = (items) => {
  const cartItems = [...items];
  const updated = cartItems?.map(item => {
    const updatedItem = Object.assign({}, item, { purchaseDate: getCurrentDate() });
    return updatedItem;
  });
  return updated;
};

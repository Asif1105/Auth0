
import { idMap } from '@shop/core/src/utils';

export function processCartItems(product, items) {
  let updated = items?.length > 0 ? items : [];
  if (updated?.length === 0) {
    updated.push(product);
  } else {
    const productMap = idMap(updated);
    if (productMap[product?.id]) {
      return updated;
    } else {
      const cartItems = [...updated, product];
      updated = cartItems;
    }
  }
  return updated;
};

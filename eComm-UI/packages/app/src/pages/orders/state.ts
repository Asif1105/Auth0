
import { Product } from '@shop/core/src/types';

export interface OrderState {
  isInitialized: boolean;
  orderedItem?: Product | null;
  orderedItems?: Product[] | [];
};

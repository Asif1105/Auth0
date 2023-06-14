
import { Product } from '@shop/core/src/types';

export interface HomeState {
  isInitialized: boolean;
  product?: Product | null;
  products?: Product[] | [];
};

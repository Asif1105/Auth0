import { HomeState } from '@shop/app/src/pages/home';
import { CartState } from '@shop/app/src/pages/cart';
import { OrderState } from '@shop/app/src/pages/orders';

export interface ApplicationState {
  home: HomeState;
  cart: CartState;
  orders: OrderState;
};

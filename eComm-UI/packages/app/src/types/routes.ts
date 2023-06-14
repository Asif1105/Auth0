export type RouteProps = {
  id?: number | string;
  nested?: any;
  name?: string;
  path: string;
  component: any;
};

export enum Routes {
  Home = '/',
  ProductDetail = ':productDetail',
  Cart = '/cart',
  Orders = '/orders'
}

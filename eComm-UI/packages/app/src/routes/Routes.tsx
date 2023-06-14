import { Home, ProductDetail } from '@shop/app/src/pages/home';
import { Cart } from '@shop/app/src/pages/cart';
import { Orders } from '@shop/app/src/pages/orders';
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import { RouteProps } from '../types';
import Header from '../pages/Header';
import * as RouteDefinitions from './RouteDefinitions';

export const routes: RouteProps[] = [
  {
    id        : 'c43dr45ui',
    name      : 'Home',
    path      : RouteDefinitions.Home,
    component : <Home />,
    nested    : [
      {
        id        : 'c43dr45ui-1',
        path      : RouteDefinitions.ProductDetail,
        component : <ProductDetail />
      }
    ]
  },
  {
    id        : 'a13dr45aa',
    name      : 'My orders',
    path      : RouteDefinitions.Orders,
    component : <Orders />
  },
  {
    id        : 'b23dr45ha',
    name      : 'Cart',
    path      : RouteDefinitions.Cart,
    component : <Cart />
  }
];

export const getAllRoutes = () => {
  const allRoutes = routes?.map(({ id, path, component, nested }: RouteProps) => {
    const router = [<Route key={id} path={path} element={component} />];
    nested?.forEach(route => {
      router.push(<Route key={route?.id} path={route?.path} element={route?.component} />);
    });
    return router;
  });
  return allRoutes;
};

export const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        {getAllRoutes?.()?.map(route => route)}
      </Routes>
    </Router>
  );
};

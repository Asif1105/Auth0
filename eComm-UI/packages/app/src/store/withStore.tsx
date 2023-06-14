import React, { ReactElement, JSXElementConstructor } from 'react';
import { Provider } from 'react-redux';
import isUndefined from 'lodash.isundefined';
import { GenericObject } from '@shop/core/src/types';
import initializeStore from './store';
import ShopSmart from '@shop/app/src/pages/_app';

type WithStoreImplProps = {
  initialReduxState: GenericObject;
};

export type StoreProps = {
  Component: React.FC;
  pageProps?: GenericObject;
};

let reduxStore;
const getStore = (rootReducer, initialState = {}) => {
  if (isUndefined(window)) {
    return initializeStore(rootReducer, initialState);
  }
  return (reduxStore = reduxStore || initializeStore(rootReducer, initialState));
};

export const withStore = (ApplicationComponent, rootReducer, ...props) => {
  const store = getStore(rootReducer);
  return (
    <Provider store={store}>
      <ShopSmart Component={ApplicationComponent} />
    </Provider>
  );
};

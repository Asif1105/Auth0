import React from 'react';
import ReactDOM from 'react-dom';
import { withStore } from '@shop/app/src/store';
import { App } from '@shop/app/src/routes';
import rootReducer from './reducers';

export const withRedux = withStore(App, rootReducer);
ReactDOM.render(withRedux, document.getElementById('root'));
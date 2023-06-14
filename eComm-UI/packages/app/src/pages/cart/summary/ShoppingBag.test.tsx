import React from 'react';
import { render } from 'enzyme';
import ShoppingBag from './ShoppingBag';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import * as translations from '../../../translations';

describe('Test Case For ShoppingBag Component', () => {
  const initialState = { name: 'App' };
  const mockStore = configureStore();
  let store;
  beforeEach(() => {
    store = mockStore(initialState);
  });
  it('should render clear cart button', () => {
    const wrapper = render(<Provider store={store}><ShoppingBag /></Provider>);
    const buttonElement  = wrapper.find('#clearCart');
    expect(buttonElement).toHaveLength(1);
    expect(buttonElement.text()).toEqual(translations.clearCart);
  });
});

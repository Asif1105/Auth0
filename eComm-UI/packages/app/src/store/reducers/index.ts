import { combineReducers } from 'redux';
import home from './home';
import cart from './cart';
import orders from './orders';

const rootReducer = combineReducers({ home, cart, orders });

export default rootReducer;

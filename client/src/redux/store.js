import { combineReducers, configureStore } from '@reduxjs/toolkit';

import product from './slices/product';
import cart from './slices/cart';
import user from './slices/user';
import admin from './slices/admin';

const reducer = combineReducers({
	product,
	cart,
    user,
	admin
});

export default configureStore({ reducer });
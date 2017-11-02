const { combineReducers } = require('redux');
const { CART } = require('./actionTypes');

/** Reducers **/

function cartItems(state = [], action) {
	switch (action.type) {
		case CART.ADD: 
			return [...state, action.item];
	}
	return state;
}

const cart = combineReducers({ items: cartItems });
const reducer = combineReducers({ cart });

module.exports = reducer;
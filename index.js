const { createStore, applyMiddleware } = require('redux');
const { CART } = require('./actionTypes');
const { reducer } = require('./reducers');
const { dispatcher } = require('./dispatcher');
const store = createStore(reducer, applyMiddleware(dispatcher.middleware));

module.exports = {
	dispatch: store.dispatch,
	register: dispatcher.register,
	actionTypes: require('./actionTypes'),
	actions: require('./actions')
};

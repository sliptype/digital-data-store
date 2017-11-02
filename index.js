const { createStore, applyMiddleware } = require('redux');
const reducer = require('./reducer');
const dispatcher = require('./dispatcher');
const store = createStore(reducer, applyMiddleware(dispatcher.middleware));

module.exports = {
	dispatch: store.dispatch,
	register: dispatcher.register,
	actionTypes: require('./actionTypes'),
	actions: require('./actions')
};

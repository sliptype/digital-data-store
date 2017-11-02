const { createStore, applyMiddleware } = require('redux');
const { reducer } = require('./reducers');
const dispatcher = require('./dispatcher');
const store = createStore(reducer, applyMiddleware(dispatcher.middleware));

module.exports = {
	dispatch: store.dispatch
};

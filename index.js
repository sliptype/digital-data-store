const { createStore, applyMiddleware } = require('redux');
const reducer = require('./reducer');
const dispatcher = require('./dispatcher');
const actions = require('./actions');
const store = createStore(reducer, applyMiddleware(dispatcher.middleware));

const dispatch = (actionType, data) => {
	let action = {
		type: actionType,
		data
	};

	store.dispatch(action);
}

module.exports = {
	actions,
	dispatch,
	register: dispatcher.register
};

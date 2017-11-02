const sideEffects = {};

const dispatcher = store => next => action => {
	let result = next(action);
	console.log('Dispatched:', action);
	let state = store.getState();
	if (sideEffects[action.type]) {
		sideEffects[action.type].forEach(sideEffect => sideEffect(state, action));
	}
	return result;
}

const register = (actionType, sideEffect) => {
	sideEffects[actionType] = sideEffects[actionType] || [];
	sideEffects[actionType] = [...sideEffects[actionType], sideEffect];
}

module.exports = {
	middleware: dispatcher,
	register
}

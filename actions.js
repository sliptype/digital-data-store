const { CART } = require('./actionTypes');

/** Action Creators **/

function cartAddItem(item) {
	return {
		type: CART.ADD,
		item
	}
}

module.exports = {
	cartAddItem
}


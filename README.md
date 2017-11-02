# Digital Data Store
##### A redux implementation of the W3 digital data layer specification

Manages the state of an application according to https://www.w3.org/2013/12/ceddl-201312.pdf

##

### Store

```
const store = require('digital-data-store');
const { CART } = store.actionTypes;
const { cartAddItem } = store.actions;
store.dispatch(cartAddItem({ id: 1 }));
```

Methods
* **register**(actionType, sideEffect)
* **dispatch**(action)

Properties
* **actionTypes**
* **actions**

##
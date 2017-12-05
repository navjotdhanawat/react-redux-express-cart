import * as actionType from './ActionType';
import _ from 'underscore';

import itemApi from '../api/itemApi';
/**
 * loadHomeItems:
 * To load home product according to catogory
 */
export function loadHomeItems() {
	return function (dispatch) {
		dispatch(requestItems());
		return itemApi.getHomeItems().then(items => {
			var state = items.docs;
			dispatch(loadHomeItemsSuccess(state));
		}).catch(error => {
			throw (error);
		});
	};
}

/**
 * @param  {} items
 */
export function loadHomeItemsSuccess(items) {
	return { type: actionType.LOAD_HOME_PRODUCTS, items };
}

/**
 * To fetch items from api
 */
export function loadItems() {
	return function (dispatch) {
		dispatch(requestItems());
		return itemApi.getItems().then(items => {
			var state = items;
			dispatch(loadItemsSuccess(state));
		}).catch(error => {
			throw (error);
		});
	};
}

/**
 * @param  {} items
 */
export function loadItemsSuccess(items) {
	return { type: actionType.LOAD_ITEMS_SUCCESS, items };
}

/**
 * @param  {} page
 * Load more items for pagination i.e infinite scroll
 */
export function loadMoreItems(page) {
	return function (dispatch) {
		dispatch(requestItems());
		return itemApi.getItemsByPage(page).then(items => {
			var state = items
			dispatch(loadNextItems(state));
		}).catch(error => {
			throw (error);
		});
	};
}

/**
 * @param  {} items
 *
 */
export function loadNextItems(items) {
	return { type: actionType.LOAD_NEXT_ITEMS, items };
}

/**
 * @param  {} keyword
 * Search product api call
 */
export function searchItems(keyword) {
	return function (dispatch) {
		return itemApi.searchItems(keyword).then(items => {
			var state = items
			dispatch(loadSearchedItems(state));
		}).catch(error => {
			throw (error);
		});
	};
}

/**
 * @param  {} items
 */
export function loadSearchedItems(items) {
	return { type: actionType.LOAD_SEARCHED_ITEMS, items };
}

/**
 * To show api progress
 */
export function requestItems() {
	return { type: actionType.REQUEST_ITEMS, items: {} };
}

/**
 * @param  {} item
 * To add item into cart
 */
export function addToCart(item) {
	return { type: actionType.ADD_TO_CART, item };
}

/**
 * @param  {} id
 * To remove item from cart
 */
export function removeFromCart(id) {
	return { type: actionType.REMOVE_FROM_CART, id };
}

/**
 * @param  {} state
 * @param  {} props
 * To check whether item is in cart or not
 */
export function isInCart(state, props) {
	var cartItems = JSON.parse(localStorage.getItem('cart'));
	return _.some(cartItems, function (item) {
		return item.id == props._id;
	});
}

/**
 * @param  {} state
 * @param  {} props
 * It store information of cart items with quantity and total price
 */
export function getCart(state, props) {
	var cartItems = JSON.parse(localStorage.getItem('cart'));
	var total = 0.00;
	_.each(cartItems, function (item) {
		total += item.price;
	});
	return {
		total: total.toFixed(2),
		items: cartItems ? cartItems.length : 0
	};
}

/**
 * @param  {} id
 * @param  {} props
 * To get particular product information from api
 */
export function getProductDetails(id, props) {
	return function (dispatch) {
		dispatch(requestItems());
		return itemApi.getItemById(id).then(item => {
			dispatch(loadProductDetails(item));
		}).catch(error => {
			throw (error);
		});
	};
}

/**
 * @param  {} item
 * To get particular product information from api
 */
export function loadProductDetails(item) {
	return { type: actionType.LOAD_PRODUCT_DETAILS, item };
}
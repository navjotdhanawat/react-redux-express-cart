import * as types from '../actions/ActionType';
import defaultState from './defaultState';
import _ from 'underscore';

/**
 * @param  {} state=defaultState.cart
 * @param  {} action
 */
export default function cartReducer(state = defaultState.cart, action) {
    switch (action.type) {
        case types.ADD_TO_CART:
            var cartState = JSON.parse(localStorage.getItem('cart'));
            cartState = cartState ? cartState : [];
            localStorage.setItem('cart', JSON.stringify([...cartState, action.item]));
            return {
                items: JSON.parse(localStorage.getItem('cart'))
            };
        case types.REMOVE_FROM_CART:
            var cartData = JSON.parse(localStorage.getItem('cart'));
            state = _.filter(cartData, function (item) {
                return item.id !== action.id
            });
            localStorage.setItem('cart', JSON.stringify(state));
            return {
                items : state
            };
        default:
            return state;
    }
}
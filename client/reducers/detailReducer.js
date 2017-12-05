import * as types from '../actions/ActionType';
import defaultState from './defaultState';
/**
 * @param  {} state=defaultState.details
 * @param  {} action
 */
export default function detailReducer(state = defaultState.details, action) {
    switch (action.type) {
        case types.LOAD_PRODUCT_DETAILS:
            return action.item;
        default:
            return state;
    }
}
import * as types from '../actions/ActionType';
import defaultState from './defaultState';
/**
 * @param  {} state=defaultState.items
 * @param  {} action
 */
export default function homeReducer(state = defaultState.items, action) {
    switch (action.type) {
        case types.LOAD_HOME_PRODUCTS:
            return {
                docs: action.items
            }
        default:
            return state;
    }
}
import * as types from '../actions/ActionType';
import defaultState from './defaultState';

/**
 * @param  {} state=defaultState.items
 * @param  {} action
 */
export default function itemReducer(state = defaultState.items, action) {
    switch (action.type) {
        case types.LOAD_ITEMS_SUCCESS:
            return {
                docs: action.items.docs,
                page: parseInt(action.items.page) + 1,
                pages: action.items.pages,
                isSearch: false,
                message: '',
                loading: false,
                isMoreItems: action.items.docs.length ? true : false
            };
        case types.LOAD_NEXT_ITEMS:
            console.log(parseInt(action.items.page) + '===' + action.items.pages);
            return {
                docs: [...state.docs, ...action.items.docs],
                page: parseInt(action.items.page) + 1,
                pages: action.items.pages,
                isSearch: false,
                message: action.items.docs.length ? '' : 'No more items',
                loading: false,
                isMoreItems: action.items.docs.length ? true : false
            };
        case types.LOAD_SEARCHED_ITEMS:
            return {
                docs: action.items.docs,
                page: parseInt(action.items.page),
                pages: action.items.pages,
                isSearch: true,
                message: action.items.docs.length ? '' : 'No item found',
                loading: false,
                isMoreItems: action.items.docs.length ? true : false
            };
        case types.REQUEST_ITEMS:
            return {
                docs: state.docs,
                page: parseInt(state.page),
                pages: state.pages,
                isSearch: state.isSearch,
                message: '',
                loading: true,
                isMoreItems: true
            };
        default:
            return state;
    }
}
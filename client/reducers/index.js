import { combineReducers } from 'redux';
import items from './itemReducer';
import cart from './cartReducer';
import home from './homeReducer';
import detail from './detailReducer';

// Combining all reducers
const urKiranaApp = combineReducers({
  items,
  cart,
  home,
  detail
})

export default urKiranaApp

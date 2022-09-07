import { combineReducers } from 'redux';

import contacts from './books/items-reducer';
import filter from './filter/filter-reducer';

const contactsReducer = combineReducers({
  contacts,
  filter,
});

export default contactsReducer;

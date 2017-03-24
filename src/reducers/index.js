import { combineReducers } from 'redux';
import { SHOW_ALL_BOOKS, SET_FILTER_FALSE, SET_FILTER_TRUE } from '../actions';

// import {  } from 'reselect'

const booksReducer = (state = [], action) => {
  if(action.type === SHOW_ALL_BOOKS) {
    return action.payload;
  }
  return state
}

const filterReducer = (state = 'all', action) => {
  if(action.type === SET_FILTER_FALSE) {
    return 'false';
  }else if (action.type === SET_FILTER_TRUE) {
    return 'true';
  }
  return 'all';
}

const rootReducer = combineReducers({
  books: booksReducer,
  filter: filterReducer
});

export default rootReducer;

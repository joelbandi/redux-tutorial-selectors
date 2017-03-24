import { combineReducers } from 'redux';
import { SHOW_ALL_BOOKS, GET_DONE_TRUE, GET_DONE_FALSE } from '../actions';


const theReducer = (state = [], action) => {
  if(action.type === SHOW_ALL_BOOKS) {
    return action.payload;
  }else if (action.type === GET_DONE_TRUE) {
    return action.payload.filter((book) => book.done)
  }else if (action.type === GET_DONE_FALSE) {
    return action.payload.filter((book) => !book.done)
  }
  return state
}


const rootReducer = combineReducers({
  books: theReducer
});

export default rootReducer;

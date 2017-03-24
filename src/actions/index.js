import getData from '../data';
export const SHOW_ALL_BOOKS = 'SHOW_ALL_BOOKS';
export const SET_FILTER_TRUE = 'SET_FILTER_TRUE';
export const SET_FILTER_FALSE = 'SET_FILTER_FALSE';

export const showAllBooks = () => {
  return {
    type: SHOW_ALL_BOOKS,
    payload: getData()
  }
}

export const setFilterTrue = () => {
  return {
    type: SET_FILTER_TRUE
  }
}

export const setFilterFalse = () => {
  return {
    type: SET_FILTER_FALSE
  }
}
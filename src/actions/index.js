import getData from '../data';
export const SHOW_ALL_BOOKS = 'SHOW_ALL_BOOKS';
export const GET_DONE_TRUE = 'GET_DONE_TRUE';
export const GET_DONE_FALSE = 'GET_DONE_FALSE';

export const showAllBooks = () => {
  return {
    type: SHOW_ALL_BOOKS,
    payload: getData()
  }
}

export const getDoneTrue = () => {
  return {
    type: GET_DONE_TRUE,
    payload: getData()
  }
}

export const getDoneFalse = () => {
  return {
    type: GET_DONE_FALSE,
    payload: getData()
  }
}
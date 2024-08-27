import * as actionTypes from './actionTypes.js';

const addBook = (newBook) => ({
  type: actionTypes.ADD_BOOK,
  payload: newBook
});

const deleteBook = (id) => ({
  type: actionTypes.DELETE_BOOK,
  payload: id
});

const toggleFavorite = (id) => ({
  type: actionTypes.TOGGLE_FAVORITE,
  payload: id
});

export {
  addBook,
  deleteBook,
  toggleFavorite
};

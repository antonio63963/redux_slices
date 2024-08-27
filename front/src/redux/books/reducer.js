import * as actionTypes from "./actionTypes.js";

const initialState = [];

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_BOOK:
      return [...state, action.payload];
    case actionTypes.DELETE_BOOK:
      return state.filter((b) => b.id !== action.payload);
    case actionTypes.TOGGLE_FAVORITE:
      return state.map((b) => {
        return b.id === action.payload
          ? { ...b, isFavorite: !b.isFavorite }
          : b;
      });

    default:
      return state;
  }
};

export default booksReducer;

import { createSlice } from "@reduxjs/toolkit";

const initState = {
  title: "",
  author: "",
  isFavorite: false
};

const filterSlice = createSlice({
  name: "filter",
  initialState: initState,
  reducers: {
    setTitleFilter: (state, action) => {
      state.title = action.payload; // can to mutate state!!! by lib under the hook "immer" without return
      //can use usual redux approach with return state
      //return {...state, title: action.payload}
    },
    setAuthorFilter: (state, action) => {
      state.author = action.payload;
    },
    setFavoriteFilter: (state, action) => {
      state.isFavorite = action.payload;
    },
    resetFilters: (state) => {
      return initState;
    },
  },
});

export default filterSlice.reducer;
export const { setTitleFilter, setAuthorFilter, setFavoriteFilter, resetFilters } =
  filterSlice.actions;

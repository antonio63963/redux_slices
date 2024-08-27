import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setTitleFilter,
  setAuthorFilter,
  resetFilters,
  setFavoriteFilter,
} from "../../redux/slices/filterSlice.js";
import Input from "../Input/Input.js";

const Filter = () => {
  const dispatch = useDispatch();
  const inputValue = useSelector((state) => state.filter);

  const [isVisibleButton, setIsVisibleButton] = useState(false);

  function onTitleChange(e) {
    setIsVisibleButton(!!e.target.value);
    dispatch(setTitleFilter(e.target.value));
  }
  function onAuthorChange(e) {
    setIsVisibleButton(!!e.target.value);
    dispatch(setAuthorFilter(e.target.value));
  }
  function onFavoriteChange(e) {
    const value = e.target.checked;
    setIsVisibleButton(value);
    dispatch(setFavoriteFilter(value));
  }

  return (
    <div className="app-block filter">
      <div className="filter-group">
        <Input
          label="Filter"
          value={inputValue.title}
          type="text"
          placeholder="Filter by Title..."
          onChange={onTitleChange}
        />
        <Input
          label="Filter"
          value={inputValue.author}
          type="text"
          placeholder="Filter by Author..."
          onChange={onAuthorChange}
        />
        <input
          type="checkbox"
          checked={inputValue.isFavorite}
          onChange={onFavoriteChange}
        />
        <button
          className="btn"
          style={{ visibility: isVisibleButton ? "visible" : "hidden" }}
          onClick={() => {
            dispatch(resetFilters());
            setIsVisibleButton(false)
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Filter;

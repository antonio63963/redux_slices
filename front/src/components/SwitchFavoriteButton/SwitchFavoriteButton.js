import React from "react";
import { BsBookmarkStar, BsBookmarkStarFill } from "react-icons/bs";

const SwitchFavoriteButton = ({ isFavorite, onClick }) => {
  return (
    <div onClick={onClick}>
      {isFavorite ? (
        <BsBookmarkStarFill className="star-icon" />
      ) : (
        <BsBookmarkStar className="star-icon" />
      )}
    </div>
  );
};

export default SwitchFavoriteButton;

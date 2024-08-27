import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteBook, toggleFavorite } from "../../redux/books/actionCreators";

import SwitchFavoriteButton from "../SwitchFavoriteButton/SwitchFavoriteButton";

import "./BookList.css";

const BookList = () => {
  const books = useSelector((state) => state.books);
  const filters = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  // const [filteredBooks, setFilteredBooks] = useState([]);

  const filteredBooks = () => {
    return books.filter((b) => {
      const matchedTitle = b.title
        .toLowerCase()
        .includes(filters.title.toLowerCase());
      const matchedAuthor = b.author
        .toLowerCase()
        .includes(filters.author.toLowerCase());
      const matchedFavorite = filters.isFavorite ? b.isFavorite : true;

      return matchedTitle && matchedAuthor && matchedFavorite;
    });
  };

  const highlightText = (text, filter) => {
    const regExp = new RegExp(`(${filter})`, 'gi');
    console.log(regExp, text.split(regExp))
    return text.split(regExp).map((substring, idx) => {
      if(substring.toLowerCase() === filter.toLowerCase()) {
        return <span key={idx} className="highlightText">{substring}</span>
      };
      return substring;
    });
  }

  return (
    <div className="app-block book-list">
      <h2>Book List</h2>
      <ul>
        {books.length ? (
          filteredBooks().map((b, idx) => {
            return (
              <li key={b.id}>
                <div className="book-info">
                  {++idx}.{highlightText(b.title, filters.title)} by
                  <strong> {highlightText(b.author, filters.author)}</strong>
                </div>
                <div className="book-actions">
                  <SwitchFavoriteButton
                    isFavorite={b.isFavorite}
                    onClick={() => dispatch(toggleFavorite(b.id))}
                  />
                  <button onClick={() => dispatch(deleteBook(b.id))}>
                    Delete
                  </button>
                </div>
              </li>
            );
          })
        ) : (
          <p>No any book yet...</p>
        )}
      </ul>
    </div>
  );
};

export default BookList;

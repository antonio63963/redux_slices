import { useState } from "react";
import { useDispatch } from "react-redux";

import { createBookWithID } from "../../utils/handleBook.js";
import dataBooks from "../../data/books.json";
import { addBook } from "../../redux/books/actionCreators.js";

import Input from "../Input/Input.js";

import "./BookForm.css";

const initFormState = { title: "", author: "" };

const BookForm = () => {
  const [formData, setFormData] = useState(initFormState);
  const dispatch = useDispatch();

  function onSubmit(e) {
    e.preventDefault();
    if (validateForm()) return;
    dispatch(addBook(createBookWithID(formData)));
    setFormData(initFormState);
  }

  function getRandomBook() {
    const randomIndex = Math.floor(Math.random() * dataBooks.length);
    dispatch(addBook(createBookWithID(dataBooks[randomIndex])));
  }

  function onChange({ target: { name, value } }) {
    setFormData((currentState) => ({ ...currentState, [name]: value }));
  }

  function validateForm() {
    return Object.values(formData).some((v) => !v.trim());
  }

  return (
    <div className="app-block book-form">
      <h2>Add New Book</h2>
      <form onSubmit={onSubmit}>
        <Input
          label="Title:"
          name="title"
          inputId="titleInput"
          onChange={onChange}
          value={formData.title}
        />
        <Input
          label="Author:"
          name="author"
          inputId="authorInput"
          onChange={onChange}
          value={formData.author}
        />
        <button type="submit">Submit</button>
        <button type="button" onClick={getRandomBook}>
          Add Random
        </button>
      </form>
    </div>
  );
};

export default BookForm;

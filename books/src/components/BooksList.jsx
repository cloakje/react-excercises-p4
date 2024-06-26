import { useState } from "react";
import Books from "./Books";
import data from '../data'

const BookList = ({  }) => {
  const [searchInput, setSearchInput] = useState("");
  const [books, setBooks] = useState(data);
  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
    const filteredBooks = books.filter((book) =>
      book.title.toLowerCase().includes(searchInput.toLowerCase())
    );
    setBooks(filteredBooks);
  };

  return (
    <div className="container-books">
      <div className="search">
        <input
          type="text"
          placeholder="Zoek een titel op"
          onChange={handleChange}
          value={searchInput}
          name="search"
        />
      </div>
      {books.map((book) => (
        <Books title={book.title} author={book.author} image={book.image} />
      ))}
    </div>
  );
};

export default BookList;

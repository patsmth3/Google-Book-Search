import React from "react";

import Book from "./Book";

const BookList = props => {
  return (
    <div>
      {props.bookList.map(book => {
        return <Book key={book.id} book={book.volumeInfo} className="Book" />;
      })}
    </div>
  );
};

export default BookList;

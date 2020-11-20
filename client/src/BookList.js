import React from "react";
import BookCard from "./BookCard";
import "./App.css";

const BookList = (props) => {
  return (
    <div className="list">
      {props.books.map((book, i) => {
        return (
          <BookCard
            key={i}
            image={book.volumeInfo.imageLinks.thumbnail}
            title={book.volumeInfo.title}
            author={book.volumeInfo.authors}
            description={book.volumeInfo.description}
            info={book.volumeInfo.infoLink}
            savebook={props.savebook}
            id={book.id}
          />
        );
      })}
    </div>
  );
};

export default BookList;
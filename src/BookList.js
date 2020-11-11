import React from 'react';
import BookCard from './BookCard';
import './App.css';

const BookList = (props) => {
    return(
     <div className="list">
    {
    props.books.map((book, i) => {
        return <BookCard
        Key={i}
        image={book.volumeInfo.imageLinks.thumbnail}
        title={book.volumeInfo.title}
        author={book.volumeInfo.authors}
        rating={book.volumeInfo.datePublished}
        />
    }
    )
    
}
     </div>
    )
    }

    export default BookList;
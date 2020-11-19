import React, { Component } from "react";
import Find from "./Find";
import request from "superagent";
import BookList from "./BookList";
import "./App.css";
// import axios from 'axios'

class Books extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      searchField: "",
    };
  }
  findBook = (e) => {
    e.preventDefault();
    request
      .get("https://www.googleapis.com/books/v1/volumes")
      .query({ q: this.state.searchField })
      .then((data) => {
        console.log(data);
        this.setState({ books: [...data.body.items] });
      });
  };

  savebook = (id) => {
    const bookId = this.state.books.find((item) => item.id === id);
    let bookData = {
      title: bookId.volumeInfo.title,
      authors: bookId.volumeInfo.authors,
      description: bookId.volumeInfo.description,
      image: bookId.volumeInfo.imageLinks.thumbnail,
      link: bookId.volumeInfo.infoLink,
      googleid: bookId.id,
    };
    // axios.post("/api/posts", bookData);
    console.log(bookData);
  };

  handleFind = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    return (
      <div>
        <Find findBook={this.findBook} handleFind={this.handleFind} />
        <BookList books={this.state.books} savebook={this.savebook} />
      </div>
    );
  }
}

export default Books;

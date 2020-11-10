import React, { Component } from 'react';
import Find from './Find';
import './App.css';
import request from 'superagent';
import BookList from './BookList';

class Books extends Component {
constructor(props) {
super(props);
this.state = {
books: [],
searchField: ''
}
}
findBook = (e) => {
e.preventDefault();
request.get("https://www.googleapis.com/books/v1/volumes")
.query({ q: this.state.searchField })
.then ((data) => {
  console.log(data);
this.setState({ books: [...data.body.items]})
})
}

handleFind = (e) => {
    this.setState({ searchField: e.target.value })
    
}

  render() {
    return (
    <div>
    <Find findBook={this.findBook} handleFind={this.handleFind}/>
    <BookList books={this.state.books}/>
    </div>
  );
  }
}
export default Books;

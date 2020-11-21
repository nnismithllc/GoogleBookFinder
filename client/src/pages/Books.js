import React, { Component } from "react";
import Api from '../utils/Api';
import Card from "../components/Card";
import Find from "../Find";
import request from "superagent";
import BookList from "../BookList";
import "./App.css";
import axios from 'axios'

class Books extends Component {
  state = {
    result: {},
    search: "",
    results: [],
    image: ""
  };

  //Sets the default search upon page load
  componentDidMount() {
    this.searchBooks("Books");
  }

  //a function to run a search of the API based on customer input
  searchBooks = (query) => {
    API.search(query)
      .then((res) => {
        //sets the array of results to state
        this.setState({ results: res.data.items });
        //sets the first result object to state
        this.setState({ result: res.data.items[0].volumeInfo });
        
        this.setState({ image: res.data.items[0].volumeInfo.imageLinks.thumbnail})
        this.setState({search: ""})
      }).catch((err) => console.log(err));
  };

  //
  handleInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.searchBooks(this.state.search);
  };

  handleBookSave = (book) => {
    
    API.saveBook({
      image: book.volumeInfo.imageLinks.smallThumbnail,
      title: book.volumeInfo.title,
      authors: book.volumeInfo.authors,
      description: book.volumeInfo.description,
      link: book.volumeInfo.infoLink,
    }).catch((err) => console.log(err));
  };
  //

  render() {
    
    const searchResults = this.state.results;
    
    return (

      <div className="container">
        <Card heading="Search for a Book">
          <SearchForm
            value={this.state.search}
            handleInputChange={this.handleInputChange}
            handleFormSubmit={this.handleFormSubmit}
          />
        </Card>
        <SearchResults searchResults={searchResults} handleBookSave={this.handleBookSave}/>
      </div>
    );
  }
}

export default Books;
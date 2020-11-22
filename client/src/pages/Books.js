// React Imports for Books Components Function
import React, { Component } from "react";
import API from "../utils/Api";
import Card from "../components/Card";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
import JumboTron from "../components/JumboTron";

// Books Component State Setup
class Books extends Component {
  state = {
    result: {},
    search: "",
    results: [],
    image: ""
  };

  //Setup Search Page Load Details
  componentDidMount() {
    this.searchBooks("React");
  }

  // Find Function Based on User Input
  searchBooks = (query) => {
    API.search(query)
      .then((res) => {
      
        this.setState({ results: res.data.items });
       
        this.setState({ result: res.data.items[0].volumeInfo });
        
        this.setState({ image: res.data.items[0].volumeInfo.imageLinks.thumbnail})
        this.setState({search: ""})
      }).catch((err) => console.log(err));
  };

  //Set State Upon Data Entry Change
  handleInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value,
    });
  };

  // Handles Form Search Details 
  handleFormSubmit = (event) => {
    event.preventDefault();
    this.searchBooks(this.state.search);
  };

  handleBookSave = (book) => {
  
  // API Call for Book Details to SavedBook Page
    API.saveBook({
      title: book.volumeInfo.title,
      authors: book.volumeInfo.authors.join(", "),
      description: book.volumeInfo.description,
      image: book.volumeInfo.imageLinks.smallThumbnail,
      link: book.volumeInfo.infoLink,
    }).catch((err) => console.log(err));
  };
  //

  // Render Function and Display for Books Details
  render() {
    
    const searchResults = this.state.results;
    
    const jumboImage = this.state.image;
    
    return (

      <div className="container">
        <Card heading="">
          <SearchForm
            value={this.state.search}
            handleInputChange={this.handleInputChange}
            handleFormSubmit={this.handleFormSubmit}
          />
        </Card>
        <JumboTron heading={this.state.result.title} jumboImage={jumboImage} author={this.state.result.authors}></JumboTron>
        <SearchResults searchResults={searchResults} handleBookSave={this.handleBookSave}/>
      </div>
    );
  }
}

// Export Books Function
export default Books;
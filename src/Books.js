import React, { Component } from 'react';
import Find from './Find';
import './App.css';
// import request from 'superagent';

class Books extends Component {
constructor(props) {
super(props);
this.state = {
books: [],
searchField: ''
}
}
// findBook = (){
// request.get
// }
handleFind = (e) => {
    console.log(e.target.value)
    this.setState({ searchField: e.target.value })
}

  return() {
    return (
    <div>
    <Find handleFind={this.handleFind}/>
    </div>
  );
  }
}
export default Books;

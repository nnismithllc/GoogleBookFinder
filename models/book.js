const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// This file empties the Books collection and inserts the books below

const bookschema = new Schema({
  
    imagePath: {type:String}, 
    title: {type:String}, 
    description: {type:String}, 
    info: {type:String}, 
     
  });

  const Book = mongoose.model("Book", bookSchema);

  module.exports = Book;

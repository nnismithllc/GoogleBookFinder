const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/3000"

const resultsSeed = ({
imagePath:'{book.volumeInfo.imageLinks.thumbnail}',
title: 'book.volumeInfo.title',
author: 'book.volumeInfo.authors',
publish: 'book.volumeInfo.publishedDate'

});
const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/gbookfinder");

const resultSeed =[
 {   
imagePath:'http://books.google.com/books/content?id=auLhDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
title: 'Dolls! Dolls! Dolls!',
author: 'Stephen Rebello',
description: "The unbelievable-but-true, inside story of Jacqueline Susann's pop culture icon Valley of the Dolls--the landmark novel and publishing phenomenon, the infamous smash hit film and Dolls's thriving legacy today Since its publication in 1966, Jacqueline Susann's Valley of the Dolls has reigned as one of the most influential and beloved pieces of commercial fiction. Selling over thirty-one million copies worldwide, it revolutionized overnight the way books got sold, thanks to the tireless and canny self-promoting Susann. It also generated endless speculation about the author's real-life models for its larger-than-life characters. Turned in 1967 into an international box-office sensation and morphing into a much-beloved cult film, its influence endures today in everything from films and TV shows to fashion and cosmetics tributes and tie-ins. Susann's compulsive readable exposé of three female friends finding success in New York City and Hollywood was a scandalous eye-opener for its candid treatment of sex, naked ambition, ageism, and pill-popping, and the big screen version was one of the most-seen and talked-about movies of the time. Dolls! Dolls! Dolls! digs deep into the creation of that hugely successful film--a journey nearly as cut-throat, sexually-charged, tragic, and revelatory as Susann's novel itself--and uncovers how the movie has become a cherished, widely imitated camp classic, thanks to its over-the-top performances, endlessly quotable absurd dialogue, outré costumes and hairdos, despite the high aspirations, money, and talent lavished on it. Screenwriter-journalist-film historian Stephen Rebello has conducted archival research and new interviews to draw back the velvet curtain on the behind-the-scenes intrigue, feuds and machinations that marked the film's production. In doing so, he unveils a rich, detailed history of fast-changing, late 1960s Hollywood, on screen and off.",

}];

db.Book
  .remove({})
  .then(() => db.Book.collection.insertMany(resultSeed))
  .then(data => {
    console.log(data.result.n + "records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

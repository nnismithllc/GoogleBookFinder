import React from 'react';
import './App.css';

const BookCard = (props) => {
    return(
       
    <div className="card-container" >
        <row>
        <div className="desc">
    <img src={props.image} alt=""/>
        <h2>{props.title}</h2>
        <h3>{props.author}</h3>
        <h4>{props.datePublished}</h4>
     </div>
     </row>
     </div>
    )
    }
    
    export default BookCard;
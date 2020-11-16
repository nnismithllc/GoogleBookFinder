import React from 'react';
import './App.css';

const BookCard = (props) => {
    return(
       
    <div className="card-container" >
        <div className="desc">
    <img src={props.image} alt=""/>
        <br></br>
        <h2>{props.title}</h2>
        <h3>{props.author}</h3>
        <h4>Date Published: {props.publish}</h4>
        <h5>Info Link: {props.info}</h5>
        <br></br>
     </div>
     </div>
    )
    }
    
    export default BookCard;
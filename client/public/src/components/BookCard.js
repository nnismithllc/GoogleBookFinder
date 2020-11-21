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
        <h4>Description: {props.description}</h4>
        <h5>Info Link: {props.info}</h5>
        <button onClick= {()=>props.SavedPage(props.id)}>Save</button>
        <br></br>
     </div>
     {/* <button type="saveBooks">Saved Books</button> */}
     </div>
    )
    }
    
    export default BookCard;
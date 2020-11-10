import React from 'react';

import './App.css';

function Find(props) {
  return (
    <div className="search-area">
        <form onSubmit={props.findBook} action="">
        <input onChange={props.handleFind} type="text"/>
        <button type="submit">Find</button> 
        </form>

    </div>
  );
}

export default Find;
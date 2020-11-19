import React from 'react';
import { Col, Row } from 'react-bootstrap';
import '.';
import './App.css';

function Find(props) {
  return (
    <div className="search-area" id="box1">
      <Row>
        <Col>
        <form onSubmit={props.findBook} action="">
        <input onChange={props.handleFind} type="text"/>
        <button type="submit">Find</button> 
        </form>
        <button type="save">Saved Items Page</button>
        </Col>
        </Row>
    </div>
     
  );
}

export default Find;
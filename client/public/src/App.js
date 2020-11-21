import React from 'react';
import Header from './components/Header';
import './App.css';
import Books from './pages/Books';
import ReadList from './pages/ReadList'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
    <Container fluid="md" >
    <div className="App">
    <Row>
      <Col>
      <Header />
      <br></br>
      <Switch>
        <Route exact path={["/","/books"]}>
      <Books/>
      <br></br>
      
    </Route>
    <Route exact path= "/reading-list">
      <ReadList />
    </Route>
    </Switch>
    </Col>
    </Row>
    </div>
    </Container>
    </Router>
  );
}


export default App;

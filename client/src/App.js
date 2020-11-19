import Header from './Header';
import './App.css';
import Books from './Books';
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'

function App() {
  return (
    <Container fluid="md" >
    <div className="App">
    <Row>
      <Col>
      <Header />
      <br></br>
      <Books/>
      <br></br>
      </Col>
    </Row>
    </div>
    </Container>
  );
}


export default App;

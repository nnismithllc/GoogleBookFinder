import Header from './Header';
import './App.css';
import Books from './Books';


function App() {
  return (
    <div className="container" >
    <div className="App">
      {/* <header className="App-header"> */}
      <Header />
      <Books />
      {/* </header> */}
    </div>
    </div>
  );
}


export default App;

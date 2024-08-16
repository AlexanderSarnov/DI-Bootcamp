import logo from './logo.svg';
import './App.css';

function App() {
  // in order to return a multiline HTML we use return (HTML code), we manipulate this DOM in index.js, so App.js will take our 
  return (
    <div className="App">
      <header className="App-header">
        Hello..
        <Hello />
        <h1>Hello, World!</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

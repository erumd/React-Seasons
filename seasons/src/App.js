import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        <a
          className="App-link"
          href="https://www.timeanddate.com/calendar/aboutseasons.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          How Seasons Change
        </a>
      </header>
    </div>
  );
}

export default App;

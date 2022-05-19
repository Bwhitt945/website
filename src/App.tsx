import React from 'react';
import logo from './logo.svg';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src='crawford_logo-1.png'></img>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Test Web app
        </p>
        <a
          className="App-link"
          href="https://crawford-consulting.com"
          target="_blank"
          rel="noopener noreferrer"
        >
         Brandon
        </a>

        <form>
          <label>
            Check: <input type = "text" name="name" />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </header>
    </div>

  );
}

export default App;

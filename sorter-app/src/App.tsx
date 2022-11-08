import React from 'react';
import logo from './logo.svg';
import sunna from './sunna.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={sunna} className="App-logo" alt="logo" />
        <p>
          Suna karaadotir - kongur islands.
        </p>
        <a
          className="App-link"
          href="https://www.facebook.com/sunna.karadottir"
          target="_blank"
          rel="noopener noreferrer"
        >
          facebook
        </a>
        <a
          className="App-link"
          href="https://www.instagram.com/sunnakara/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Insta :*
        </a>
      </header>
    </div>
  );
}

export default App;

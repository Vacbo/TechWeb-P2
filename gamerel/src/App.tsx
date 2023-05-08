import React from 'react';
import logo from './controller.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="App-logo-container">
          <h1 className="App-logo-name">GAMEREL</h1>
          <p className="App-logo-slogan"> A game relevance search manger</p>
        </div>
      </header>
    </div>
  );
}

export default App;

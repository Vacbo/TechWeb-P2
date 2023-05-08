import {useState} from 'react';
import logo from './controller.svg';
import axios from "axios";
import './App.css';
import { TextField } from '@mui/material';

function App() {
  const [game, setGame] = useState('');
  
  const handleKeyDown = (event: any) => {
    if (event.key === 'Enter') {
      // axios post
      console.log(game);
    }
  };


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="App-logo-container">
          <h1 className="App-logo-name">GAMEREL</h1>
          <p className="App-logo-slogan"> A game relevance search manger</p>
        </div>
      </header>
      <TextField id="game" variant="outlined" placeholder="Search or enter game" onChange={event => setGame(event.target.value)} onKeyDown={handleKeyDown}/>
    </div>
  );
}

export default App;

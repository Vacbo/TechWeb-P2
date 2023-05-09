import { useState } from 'react';
import logo from './controller.svg';
import axios from "axios";
import './App.css';
import { TextField } from '@mui/material';

function App() {
  const [game, setGame] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [playtime, setPlaytime] = useState('');
  const [twitchCount, setTwitchCount] = useState('');

  const url = "http://localhost:8000/api/game/";

  const options = {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
  };

  const handleKeyDown = (event: any) => {
    if (event.key === 'Enter') {
      // axios post
      axios
        .post(url, { gameName: game }, options)
        .then(response => {
          console.log(response);
          setShowResult(true);
        })

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
      <div className='App-text-input-container'>
        <TextField fullWidth id="game" variant="outlined" placeholder="Search or enter game" onChange={event => setGame(event.target.value)} onKeyDown={handleKeyDown} className='App-text-input' sx={{ input: { color: 'white' } }} />
      </div>
      {showResult && 
        <div className='App-result-container'>
          <p className='App-result-text-title'>GAME: {game}</p>
          <p className='App-result-text1'>Average Playtime: {playtime}</p>
          <p>Twitch Count: {twitchCount}</p>
        </div>}
    </div>
  );
}

export default App;

import { useState } from 'react';
import logo from './controller.svg';
import axios from "axios";
import './App.css';
import { TextField } from '@mui/material';

function App() {
  const [game, setGame] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [playtime, setPlaytime] = useState('');
  const [twitchStreamsCount, settwitchStreamsCount] = useState('');

  const options = {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
  };

  const handleKeyDown = (event: any) => {
    if (event.key === 'Enter') {
      // axios get
      axios
        .get("https://api.rawg.io/api/games/" + game.replace(/\s+/g, '-').toLowerCase() + "?key=415ef499ce2947b995e3e6a256a70f5c", options)
        .then(response => {
          axios
            .post("https://techweb-p2-production.up.railway.app/games/update", response.data, options)
            .then(response => {
              setPlaytime(response.data.playtime);
              axios
                .post("https://techweb-p2-production.up.railway.app/games/data", {slug: game.replace(/\s+/g, '-').toLowerCase()}, options)
                .then(response => {
                  settwitchStreamsCount(response.data);
                  setShowResult(true);
                })
            })
        })
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="App-logo-container">
          <h1 className="App-logo-name">GAMEREL</h1>
          <p className="App-logo-slogan"> A game relevance search manager</p>
        </div>
      </header>
      <div className='App-text-input-container'>
        <TextField fullWidth id="game" variant="outlined" placeholder="Search or enter game" onChange={event => setGame(event.target.value)} onKeyDown={handleKeyDown} className='App-text-input' sx={{ input: { color: 'white' } }} />
      </div>
      {showResult &&
        <div className='App-result-container'>
          <p className='App-result-text-title'>GAME: {game}</p>
          <p className='App-result-text1'>Average playtime of the game in hours: {playtime} hours</p>
          <p> How many streamers are streaming the game: {twitchStreamsCount} </p>
        </div>}
    </div>
  );
}

export default App;

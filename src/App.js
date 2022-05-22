import './App.css';
// import { useState, useEffect } from 'react'
import GamesContainer from './components/GamesContainer';
import LeaderBoard from './components/LeaderBoard';

function App() {
  return (
    <div id='app-main-div'>
      <h5>Office Games</h5>
      <GamesContainer />
      {/* <LeaderBoard /> */}
    </div>
  )
}

export default App;

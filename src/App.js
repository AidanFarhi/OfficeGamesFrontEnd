import './App.css';
import Navbar from './components/Navbar';
import GamesContainer from './components/GamesContainer';
import LeaderBoard from './components/LeaderBoard';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer';
import Login from './components/Login';
import NewGame from './components/NewGame';

function App() {
  return (
      <div id='app-main-div'>
        <BrowserRouter>
          <Header />
          <Navbar />
          <Routes>
            <Route path="/" element={<LeaderBoard />} />
            <Route path="/ping-pong" element={<GamesContainer />} />
            <Route path="/login" element={<Login />}/>
            <Route path="/new-game" element={<NewGame />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>    
  )
}

export default App;

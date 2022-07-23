import './App.css';
import Navbar from './components/Navbar';
import GamesContainer from './components/GamesContainer';
import LeaderBoard from './components/LeaderBoard';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer';
import Login from './components/Login';
import NewGameForm from './components/NewGameForm';
import Messages from './components/Messages';
import {useEffect, useState } from 'react'
import Cookies from "js-cookie"

function App() {

  const [username, setUsername] = useState('')
  const [loggedIn, setLoggedIn] = useState(false)

  const logout = () => {
    Cookies.remove("username")
    Cookies.remove("userId")
    Cookies.remove("loggedIn")
    setUsername('')
    setLoggedIn(false)
  }

  const login = () => {
    setLoggedIn(true)
  }

  useEffect(() => {
    if (Cookies.get("loggedIn") === "true") {
      setUsername(Cookies.get("username"))
    }
  }, [loggedIn])

  return (
      <div id='app-main-div'>
        <BrowserRouter>
          <Header username={username} logoutFunction={logout}/>
          <Navbar />
          <Routes>
            <Route path="/" element={<LeaderBoard />} />
            <Route path="/my-games" element={<GamesContainer />} />
            <Route path="/login" element={<Login loginFunction={login}/>}/>
            <Route path="/new-game" element={<NewGameForm />} />
            <Route path="/messages" element={<Messages />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>    
  )
}

export default App;

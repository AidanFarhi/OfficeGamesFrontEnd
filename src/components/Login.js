import React from "react";
import { Navigate } from "react-router-dom"
import { useState } from "react";
import "../styles/Login.css"
import Cookies from "js-cookie"

export default function Login(props) {
    
    const [username, setUsername] = useState('')
    const [loggedIn, setLoggedIn] = useState(false)
    const [showLoginError, setShowLoginError] = useState(false)

    const login = props.loginFunction

    const handleUsername = e => { setUsername(e.target.value) }

    const loginOrShowError = result => {
        if (result > 0) {
            setLoggedIn(true)
            Cookies.set("loggedIn", "true")
            Cookies.set("userId", parseInt(result))
            Cookies.set("username", username)
            login()
        } else {
            setLoggedIn(false)
            setShowLoginError(true)
        }
    }

    const submitPostRequest = async(payload) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        }
        const response = await fetch('api/v1/player/login', requestOptions)
        const data = await response.json()
        loginOrShowError(data)
    }

    const handleSubmit = e => {
        e.preventDefault()
        setShowLoginError(false)
        const payload = { username: username }
        submitPostRequest(payload)
    }

    return (
        <div id="login-form-div">
            <form id="login-form" onSubmit={handleSubmit}>
            <label>Username</label>
            <input 
                className="basic-input" 
                type="text" 
                name="oppenent" 
                onChange={handleUsername}
                value={username}
                autoComplete="off"
            />
            <input id='login-submit-input' type="submit" value="Login" />
            {showLoginError ? <p style={{color: "red", alignSelf: "center"}}>Invalid Username</p> : ""}
            </form>
            {loggedIn ? <Navigate replace to="/"/> : ""}
        </div>  
    )
}
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Header.css"

export default function Header(props) {

    const [username, setUsername] = useState('')

    const logout = props.logoutFunction

    useEffect(() => {
        setUsername(props.username)
    }, [props.username])

    return (
        <div id='header-div'>
            <h4 id='main-header'>Office Games</h4>
            {
                username !== "" ?
                <p id='username-display'>{username}</p>
                :
                ""
            }
            {
                username === "" ?
                <NavLink 
                    id='login-link' 
                    to='/login'
                    style={({ isActive }) => {
                        return {
                            borderColor: isActive ? "white" : "",
                        }
                    }}>
                    Login
                </NavLink>
                :
                // <NavLink 
                //     id='login-link'
                //     to='/'>
                //     Logout
                // </NavLink>
                <button onClick={logout}>Logout</button>
            }
            
        </div>
    )
}
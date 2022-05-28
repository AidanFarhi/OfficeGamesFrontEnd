import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Cookies from "js-cookie"
import "../styles/Header.css"

export default function Header() {

    const [username, setUsername] = useState('')

    useEffect(() => {
        if (Cookies.get("loggedIn") === "true") setUsername(Cookies.get("username"))
    }, [])

    return (
        <div id='header-div'>
            <h4 id='main-header'>Office Games</h4>
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
                <NavLink 
                    id='login-link'
                    to='/'>
                    Logout
                </NavLink>
            }
            
        </div>
    )
}
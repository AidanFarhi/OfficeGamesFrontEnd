import React from "react"
import { NavLink } from "react-router-dom"
import "../styles/Navbar.css"

export default function Navbar() {
    return (
        <nav id='navbar-div'>
            <NavLink 
                to='/'
                style={({ isActive }) => {
                    return {
                        color: isActive ? "white" : "",
                    }
                }}>
                Leaderboard
            </NavLink>
            <NavLink 
                to='/ping-pong'
                style={({ isActive }) => {
                    return {
                        color: isActive ? "white" : "",
                    }
                }}>
                Ping Pong
            </NavLink>
        </nav>
    )
}
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
                        borderColor: isActive ? "white" : "",
                    }
                }}>
                Leaderboard
            </NavLink>
            <NavLink 
                to='/my-games'
                style={({ isActive }) => {
                    return {
                        borderColor: isActive ? "white" : "",
                    }
                }}>
                My Games
            </NavLink>
        </nav>
    )
}
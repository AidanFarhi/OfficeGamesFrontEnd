import React from "react"
import { NavLink } from "react-router-dom"
import "../styles/Footer.css"

export default function Footer() {
    return (
        <div id='footer-div'>
            <NavLink 
                id='new-game-link' 
                to='/new-game'
                style={({ isActive }) => {
                    return {
                        borderColor: isActive ? "white" : "",
                    }
                }}
                >
                New Game
            </NavLink>
        </div>
    )
}
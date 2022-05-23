import React from "react"
import { Link } from "react-router-dom"
import "../styles/Footer.css"

export default function Footer() {
    return (
        <div id='footer-div'>
            <Link id='new-game-link' to='/new-game'>New Game</Link>
        </div>
    )
}
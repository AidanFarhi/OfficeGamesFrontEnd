import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Header.css"

export default function Header() {
    return (
        <div id='header-div'>
            <h4 id='main-header'>Office Games</h4>
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
        </div>
    )
}
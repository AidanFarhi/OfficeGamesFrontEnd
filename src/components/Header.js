import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Header.css"

export default function Header(props) {

    const [username, setUsername] = useState(props.username)

    const logout = props.logoutFunction

    useEffect(() => {
        setUsername(props.username)
    }, [props.username])

    return (
        <div id='header-div'>
            <img id="ping-pong-icon" src="images/pingpong2.png" alt="A ping pong icon" />
            {
                username !== "" ?
                <p id='username-display'>{username}</p>
                :
                ""
            }
            {
                username !== "" ?
                    <NavLink id='messaged-link' to='/messages'>
                        <img id="message-icon" src="images/message.png" alt="A message icon" />
                    </NavLink>
                :
                ""
            }
            {
                username === "" ?
                <NavLink id='login-link' to='/login'>
                    <img id="login-icon" src="images/login.png" alt="A login icon" />
                </NavLink>
                :
                <button id='logout-button' onClick={logout}>
                    <img id="logout-icon" src="images/logout.png" alt="A logout icon" />
                </button>
            }
        </div>
    )
}
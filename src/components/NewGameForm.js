import React from "react"
import "../styles/NewGameForm.css"
import { useState } from "react"
import LoadingAnimation from "./LoadingAnimation"

export default function NewGameForm() {

    const [userId, setUserId] = useState(1)
    const [opponent, setOpponent] = useState('')
    const [userScore, setUserScore] = useState('')
    const [opponentScore, setOpponentScore] = useState('')
    const [makingPostRequest, setMakingPostRequest] = useState(false)

    const handleOpponent = e => { setOpponent(e.target.value) }
    const handleUserScore = e => { setUserScore(e.target.value) }
    const handleOpponentScore = e => { setOpponentScore(e.target.value) }

    const submitPostRequest = async(payload) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        }
        const response = await fetch('api/v1/game-message/send-game-message', requestOptions)
        const status = response.status
        const data = await response.json()
        console.log(data)
        console.log(status)
    }

    const handleSubmit = e => {
        e.preventDefault()
        const payload = {
            playerOneId: userId,
            playerTwoName: opponent, 
            playerOneScore: parseInt(userScore),
            playerTwoScore: parseInt(opponentScore)
        }
        setMakingPostRequest(true)
        submitPostRequest(payload)
        setMakingPostRequest(false)
    }

    return (
        <div id="new-game-form-div">
            {makingPostRequest 
            ? <LoadingAnimation />
            : 
            <form id="new-game-form" onSubmit={handleSubmit}>
            <label>Opponent</label>
            <input 
                className="basic-input" 
                type="text" 
                name="oppenent" 
                onChange={handleOpponent}
                value={opponent}
                autoComplete="off"
            />
            <label>Your Score</label>
            <input 
                className="basic-input" 
                type="number" 
                name="self-score" 
                onChange={handleUserScore}
                value={userScore}
                autoComplete="off"
            />
            <label>Opponent Score</label>
            <input 
                className="basic-input" 
                type="number" 
                name="opponent-score" 
                onChange={handleOpponentScore}
                value={opponentScore}
                autoComplete="off"
            />
            <input id='new-game-submit-input' type="submit" value="+" />
        </form>
            }
        </div>  
    )
}
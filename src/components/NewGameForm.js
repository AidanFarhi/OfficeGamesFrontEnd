import React from "react"
import "../styles/NewGameForm.css"

export default function NewGameForm() {
    return (
        <div id="new-game-form-div">
            <form id="new-game-form">
                <label>Opponent</label>
                <input className="basic-input" type="text" name="oppenent" />
                <label>Your Score</label>
                <input className="basic-input" type="number" name="self-score" />
                <label>Opponent Score</label>
                <input className="basic-input" type="number" name="opponent-score" />
                <input id='new-game-submit-input' type="submit" value="+" />
            </form>
        </div>  
    )
}
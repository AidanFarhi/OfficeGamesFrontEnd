import { useState, useEffect } from "react";
import GameMessage from "./GameMessage";

export default function Messages() {

    const [games, setGames] = useState([])

    const fetchGamesFromApi = async () => {
        const resp = await fetch('/api/v1/game-message/get-messages-received?id=1')
        const data = await resp.json()
        console.log(data)
        return data
    }

    const generateGameMessageComponents = gameMessages => gameMessages.map((obj, i) => <GameMessage key={i} data={obj}/>)
  
    useEffect(() => {
        async function fetchData() {
            const arrayOfGameMessageObjects = await fetchGamesFromApi()
            const arrayOfGameMessageComponents = generateGameMessageComponents(arrayOfGameMessageObjects)
            setGames(arrayOfGameMessageComponents)
        }
        fetchData()
    }, [])
    
    return (
        <div id='games-container'>
            <p>Game Requests</p>
            {games}
        </div>
    )
}
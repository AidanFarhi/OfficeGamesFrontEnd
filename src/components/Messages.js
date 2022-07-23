import { useState, useEffect } from "react";
import GameMessage from "./GameMessage";
import Cookies from "js-cookie"
import '../styles/Messages.css'
import LoadingAnimation from "./LoadingAnimation";

export default function Messages() {

    const [games, setGames] = useState([])
    const [loading, setLoading] = useState(true)

    const fetchGamesFromApi = async () => {
        const userId = Cookies.get('userId')
        if (userId !== undefined) {
            const resp = await fetch(`/api/v1/game-message/get-messages-received?id=${userId}`)
            const data = await resp.json()
            return data
        }
        return []
    }

    const generateGameMessageComponents = gameMessages => gameMessages.map((obj, i) => <GameMessage key={i} data={obj}/>)
  
    useEffect(() => {
        async function fetchData() {
            const arrayOfGameMessageObjects = await fetchGamesFromApi()
            const arrayOfGameMessageComponents = generateGameMessageComponents(arrayOfGameMessageObjects)
            setGames(arrayOfGameMessageComponents)
            setLoading(false)
        }
        fetchData()
    }, [])
    
    return (
        <div id='game-messages-container'>
            {loading ? 
                <div id='game-messages-loading-div'>
                    <p>Getting game requests...</p>
                    <LoadingAnimation />
                </div>
            : null}
            {games.length === 0 && !loading ? <p>No requests found...</p> : null}
            {games.length !== 0 ? <p>Game requests</p> : null}
            {games}
        </div>
    )
}
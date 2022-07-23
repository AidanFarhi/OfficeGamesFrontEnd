import { useState, useEffect } from "react"
import OfficeGame from "./OfficeGame"
import "../styles/GamesContainer.css"
import LoadingAnimation from "./LoadingAnimation";
import Cookies from "js-cookie"


export default function GamesContainer() {

    const [games, setGames] = useState([])
    const [loading, setLoading] = useState(true)

    const fetchGamesFromApi = async () => {
        const userId = Cookies.get('userId')
        if (userId !== undefined) {
            const resp = await fetch(`/api/v1/office-games/user-games?id=${userId}`)
            const data = await resp.json()
            return data
        }
        return []
    }

    const generateGameComponents = games => games.map((obj, i) => <OfficeGame key={i} data={obj}/>)
  
    useEffect(() => {
        async function fetchData() {
            const arrayOfGameObjects = await fetchGamesFromApi()
            const arrayOfGameComponents = generateGameComponents(arrayOfGameObjects)
            setGames(arrayOfGameComponents)
            setLoading(false)
        }
        fetchData()
    }, [])
    
    return (
        <div id='games-container'>
            {loading ? 
                <div id='game-messages-loading-div'>
                    <p>Getting your games...</p>
                    <LoadingAnimation />
                </div>
            : null}
            {games.length === 0 && !loading ? <p>No games found...</p> : null}
            {games.length !== 0 ? <p>Your games</p> : null}
            {games}
        </div>
    )
}
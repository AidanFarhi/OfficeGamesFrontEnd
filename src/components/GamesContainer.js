import { useState, useEffect } from "react";
import OfficeGame from "./OfficeGame";

export default function GamesContainer() {

    const [games, setGames] = useState([])

    const fetchGamesFromApi = async () => {
        const resp = await fetch('/api/v1/office-games/user-games?id=1')
        const data = await resp.json()
        return data
    }

    const generateGameComponents = games => games.map((obj, i) => <OfficeGame key={i} data={obj}/>)
  
    useEffect(() => {
        async function fetchData() {
            const arrayOfGameObjects = await fetchGamesFromApi()
            console.log(arrayOfGameObjects)
            const arrayOfGameComponents = generateGameComponents(arrayOfGameObjects)
            setGames(arrayOfGameComponents)
        }
        fetchData()
    }, [])
    
    return (
        <div>
            <p>Games for player id: 1</p>
            {games}
        </div>
    )
}
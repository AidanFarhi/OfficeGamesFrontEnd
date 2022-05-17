import { useState, useEffect } from "react";
import PingPongGame from "./PingPongGame";

export default function GamesContainer() {

    const [games, setGames] = useState([])

    const fetchGamesFromApi = () => {
        // this will be an api call to backend
        return [
            { playerOne: 'Bob', playerTwo: 'Jim', playerOneScore: 21, playerTwoScore: 15 },
            { playerOne: 'Joe', playerTwo: 'Fred', playerOneScore: 21, playerTwoScore: 11 },
            { playerOne: 'Steve', playerTwo: 'Bob', playerOneScore: 14, playerTwoScore: 21 },
            { playerOne: 'Mary', playerTwo: 'Jim', playerOneScore: 5, playerTwoScore: 21 },
            { playerOne: 'Lue', playerTwo: 'Bob', playerOneScore: 7, playerTwoScore: 21 }
        ]
    }

    const generateGameComponents = games => games.map((obj, i) => <PingPongGame key={i} data={obj}/>)
  
    useEffect(() => {
        const arrayOfGameObjects = fetchGamesFromApi()
        const arrayOfGameComponents = generateGameComponents(arrayOfGameObjects)
        setGames(arrayOfGameComponents)
    }, [])
    
    return (
        <div>
            {games}
        </div>
    )
}
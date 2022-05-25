import '../styles/LeaderBoard.css'
import { useEffect, useState } from 'react'
import LoadingAnimation from './LoadingAnimation'

export default function LeaderBoard() {

    const [leaderBoardItems, setLeaderBoardItems] = useState([])
    const [loading, setLoading] = useState(true)

    const createTableRows = data => {
        return data.map((item, i) => {
            return (
                <tr key={i}>
                    <td>{item.playerName}</td>
                    <td>{item.wins}</td>
                    <td>{item.losses}</td>
                    <td>{item.pointsFor}</td>
                    <td>{item.pointsAgainst}</td>
                    <td>{item.winPercentage}%</td>
                </tr>
            )
        })
    }

    const fetchLeaderBoardItems = async () => {
        const response = await fetch('api/v1/leaderboard/latest')
        const data = await response.json()
        return data
    } 

    useEffect(() => {
        const getData = async () => {
            const data = await fetchLeaderBoardItems()
            const items = createTableRows(data)
            setLeaderBoardItems(items)
            setLoading(false)
        }
        getData()
    }, [])

    return (
        <div id='leaderboard-div'>
            {loading 
            ? 
            <LoadingAnimation /> 
            :
            <table>
                <thead>
                    <tr>
                        <th>Pl</th>
                        <th>W</th>
                        <th>L</th>
                        <th>PF</th>
                        <th>PA</th>
                        <th>WP</th>
                    </tr>
                </thead>
                <tbody>
                    {leaderBoardItems}
                </tbody>
            </table>
            }
        </div>
    )
}
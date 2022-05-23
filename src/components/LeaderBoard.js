import '../styles/LeaderBoard.css'

export default function LeaderBoard() {
    return (
        <div id='leaderboard-div'>
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
                    <tr>
                        <td>Aidan</td>
                        <td>7</td>
                        <td>3</td>
                        <td>521</td>
                        <td>412</td>
                        <td>83%</td>
                    </tr>
                    <tr>
                        <td>Kevin</td>
                        <td>3</td>
                        <td>7</td>
                        <td>412</td>
                        <td>698</td>
                        <td>72%</td>
                    </tr>
                    <tr>
                        <td>Atdarva</td>
                        <td>2</td>
                        <td>12</td>
                        <td>345</td>
                        <td>546</td>
                        <td>26%</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
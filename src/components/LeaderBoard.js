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
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Aidan</th>
                        <th>7</th>
                        <th>3</th>
                        <th>521</th>
                        <th>412</th>
                    </tr>
                    <tr>
                        <th>Kevin</th>
                        <th>3</th>
                        <th>7</th>
                        <th>412</th>
                        <th>698</th>
                    </tr>
                    <tr>
                        <th>Atharva</th>
                        <th>2</th>
                        <th>12</th>
                        <th>345</th>
                        <th>546</th>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
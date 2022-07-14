export default function GameMessage(props) {
    return (
        <div>
            <hr/>
            <p>Opponent: {props.data.sendingPlayerName}</p>
            <p>Your score: {props.data.receivingPlayerScore}</p>
            <p>Their score: {props.data.sendingPlayerScore}</p>
        </div>
    )
}
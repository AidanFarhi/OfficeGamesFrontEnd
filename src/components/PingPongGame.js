
export default function PingPongGame(props) {
    return (
        <div>
            <hr/>
            <p>{props.data.playerOne}: {props.data.playerOneScore} | {props.data.playerTwo}: {props.data.playerTwoScore}</p>
        </div>
    )
}
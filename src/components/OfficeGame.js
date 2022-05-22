
export default function OfficeGame(props) {
    return (
        <div>
            <hr/>
            <p>{props.data.playerOneName}: {props.data.playerOneScore}</p>
            <p>{props.data.playerTwoName}: {props.data.playerTwoScore}</p>
        </div>
    )
}
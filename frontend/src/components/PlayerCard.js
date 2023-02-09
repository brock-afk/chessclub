import './PlayerCard.css';

const PlayerCard = (props) => {
    return (
        <div className="player-card">
            <div className="player-card__description">
                <h2>{props.name}</h2>
                <div className="player-card__price">{props.rating}</div>
            </div>
        </div>
    )
}

export default PlayerCard;
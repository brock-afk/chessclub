import "./LeaderBoard.css";
import PlayerCard from "../player/PlayerCard";

const LeaderBoard = (props) => {
  return (
    <div className="leaderboard">
      {props.players.map((player) => {
        return (
          <PlayerCard
            key={player.id}
            name={player.name}
            rating={player.rating}
          />
        );
      })}
    </div>
  );
};

export default LeaderBoard;

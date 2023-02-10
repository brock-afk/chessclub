import "./LeaderBoard.css";
import PlayerCard from "../player/PlayerCard";

const LeaderBoard = (props) => {
  return (
    <div class="leaderboard">
      {props.players.map((player) => {
        return <PlayerCard name={player.name} rating={player.rating} />;
      })}
    </div>
  );
};

export default LeaderBoard;

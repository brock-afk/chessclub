import Navbar from "./components/navbar/Navbar";
import LeaderBoard from "./components/leaderboard/LeaderBoard";

function App() {
  const players = [
    {
      id: 0,
      name: "Marcus",
      rating: 1254,
    },
    {
      id: 1,
      name: "Hunter",
      rating: 1152,
    },
    {
      id: 2,
      name: "Eric",
      rating: 1130,
    },
    {
      id: 3,
      name: "John",
      rating: 1099,
    },
    {
      id: 4,
      name: "Garrett",
      rating: 1079,
    },
  ];

  return (
    <div>
      <Navbar />
      <LeaderBoard players={players} />
    </div>
  );
}

export default App;

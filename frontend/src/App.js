import LeaderBoard from "./components/leaderboard/LeaderBoard";

function App() {
  const players = [
    {
      name: "Marcus",
      rating: 1254,
    },
    {
      name: "Hunter",
      rating: 1152,
    },
    {
      name: "Eric",
      rating: 1130,
    },
    {
      name: "John",
      rating: 1099,
    },
    {
      name: "Garrett",
      rating: 1079,
    },
  ];

  return <LeaderBoard players={players} />;
}

export default App;

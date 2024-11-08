import { useState } from "react";
import { Matches, MatchInfo } from "./Components/Match.tsx";
import "./App.css";
import { SearchForm } from "./Components/SearchForm.tsx";

export interface MatchInfoPlayer {
  matches: MatchInfo[];
  playerName?: string;
}
function App() {
  const [matches, setMatches] = useState<MatchInfoPlayer | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <>
      <SearchForm setMatchesInfo={setMatches} setLoading={setLoading} />
      <br />
      <br />
      {loading && (
        <img className="loading" src="https://i.gifer.com/VAyR.gif" />
      )}
      <table>

          <Matches playerMatches={matches} />
      </table>
    </>
  );
}

export default App;

import { useState } from "react";
import { Matches, MatchInfo } from "./Components/Match.tsx";
import "./App.css";
import { SearchForm } from "./Components/SearchForm.tsx";

function App() {
  const [matches, setMatches] = useState<MatchInfo[] | null>(null);
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
        <tbody>
          <Matches matches={matches} />
        </tbody>
      </table>
    </>
  );
}

export default App;

import { useState } from "react";
import { Matches, InputData, MatchInfo } from "./Components/Match.tsx";
import { RegionInput } from "./Components/RegionInput";
import { InputContext } from "./Context/InputContext";
import "./App.css";
import { FetchButton } from "./Components/FetchButton";

function App() {
  const [inputData, setInputData] = useState<InputData>({});
  const [matches, setMatches] = useState<MatchInfo[] | null>(null);

  console.log(inputData);

  return (
    <>
      <RegionInput
        onChange={(e) =>
          setInputData({ ...inputData, playerRegion: e.target.value })
        }
      />
      <br />

      <input
        onChange={(e) =>
          setInputData({ ...inputData, playerName: e.target.value })
        }
        placeholder="In game name"
      />
      <input
        onChange={(e) =>
          setInputData({ ...inputData, playerTag: e.target.value })
        }
        placeholder="tagline"
        className="tagline"
      />
      <InputContext.Provider value={inputData}>
        <FetchButton setMatchesInfo={setMatches} />
      </InputContext.Provider>
      <br />
      <br />
      <table>
        <Matches matches={matches} />
      </table>
    </>
  );
}

export default App;

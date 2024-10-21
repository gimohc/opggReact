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
      <div className="SearchBar Header">
        <div className="InputGroup">
          <RegionInput
            onChange={(e) =>
              setInputData({ ...inputData, playerRegion: e.target.value })
            }
          />
        </div>
        <div className="InputGroup">
          <label className="Label">Name</label>

          <input
            onChange={(e) => {
              const fullName = e.target.value.split("#");
              setInputData({
                ...inputData,
                playerName: fullName[0],
                playerTag: fullName[1],
              });
            }}
            placeholder="Name#Tag"
          />
        </div>
        <InputContext.Provider value={inputData}>
          <FetchButton setMatchesInfo={setMatches} />
        </InputContext.Provider>
      </div>
      <br />
      <br />
      <table>
        <Matches matches={matches} />
      </table>
    </>
  );
}

export default App;

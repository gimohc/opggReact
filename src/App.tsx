import { useState } from "react";
import { Matches, InputData, MatchInfo } from "./Components/Match.tsx";
import { RegionInput } from "./Components/RegionInput";
import { InputContext } from "./Context/InputContext";
import "./App.css";
import { FetchButton } from "./Components/FetchButton";

function App() {
  const [inputData, setInputData] = useState<InputData>({ playerRegion: "NA" });
  const [matches, setMatches] = useState<MatchInfo[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <InputContext.Provider value={inputData}>
      <div className="searchBar header">
        <div className="inputGroup selectGroup">
          <RegionInput
            onChange={(e) =>
              setInputData({ ...inputData, playerRegion: e.target.value })
            }
          />
        </div>
       <div className="inputGroup nameGroup">
          <label className="label">Name</label>

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

        <FetchButton setMatchesInfo={setMatches} setLoading={setLoading} />
      </div>
      <br />
      <br />
      {loading && <img className="loading" src="https://i.gifer.com/VAyR.gif"/>}
      <table>
        <Matches matches={matches} />
      </table>
    </InputContext.Provider>
  );
}

export default App;

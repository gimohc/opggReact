import { useState } from "react";
import { RegionInput } from "./RegionInput";
import { InputData } from "./Match";
import { MatchInfoPlayer } from "../App";
import axios from "axios";


interface ChildComponentProps {
  setMatchesInfo: React.Dispatch<React.SetStateAction<MatchInfoPlayer | null>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}
export function SearchForm({
  setMatchesInfo,
  setLoading,
}: ChildComponentProps) {
  const [inputData, setInputData] = useState<InputData>({ playerRegion: "NA" });
  let loading;
  const fetchMatches = async () => {
    try {
      loading=true;
      setLoading(true);
      const response = await axios.post(
        "https://opgg-production.up.railway.app/api/performAction",
        //"http://localhost:8080/api/performAction",
        {
          actionType: "getMatchHistory",
          inputData: inputData,
        }
      );
      if (response !== null) setMatchesInfo({playerName: inputData.playerName, matches: response.data});
    } catch (error) {
      console.error("Error fetching matches:", error);
    }
    loading = false;
    setLoading(false);
  };
  const onSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    fetchMatches();
} 

  
  return (
    <form onSubmit={onSubmit} className="searchBar header">
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
          required
          pattern="[^]+#[^]+"
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

      <input type="submit" disabled={loading} className="formButton" />
    </form>
  );
}

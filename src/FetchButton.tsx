import axios from "axios";
import React, { useContext } from "react";
import { InputContext } from "./InputContext";
import { InputData, MatchInfo } from "./Match";

interface ChildComponentProps {
  setMatchesInfo: React.Dispatch<React.SetStateAction<MatchInfo[] | null>>;
}

export function FetchButton({ setMatchesInfo }: ChildComponentProps) {
  const inputData = useContext<InputData | null>(InputContext);
    
  const fetchMatches = async () => {
    try {
      const response = (await axios.post(
        "http://localhost:8080/api/performAction",
        {
          actionType: "getMatchHistory",
          inputData: {
            playerRegion: inputData?.playerRegion,
            playerName: inputData?.playerName,
            playerTag: inputData?.playerTag
          },
        }
      ));
      if (response !== null) setMatchesInfo(response.data);
    } catch (error) {
      console.error("Error fetching matches:", error);
    }
  };

  return (
    <button
      onClick={() => {
        window.alert({...inputData});
        window.alert({inputData});
        window.alert(inputData?.playerRegion);
        fetchMatches();
        window.alert({...inputData});
        window.alert({inputData});
        window.alert({playerRegion: inputData?.playerRegion});
      }}
    >
      fetch
    </button>
  );
}

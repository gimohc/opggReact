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
    if (inputData?.playerRegion == null) window.alert("Invalid Region");
    else {
      try {
        const response = await axios.post(
          "http://localhost:8080/api/performAction",
          {
            actionType: "getMatchHistory",
            inputData: inputData,
          }
        );
        if (response !== null) setMatchesInfo(response.data);
      } catch (error) {
        console.error("Error fetching matches:", error);
      }
    }
  };

  return (
    <button
      onClick={() => {
        fetchMatches();
      }}
    >
      fetch
    </button>
  );
}

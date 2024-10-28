import axios from "axios";
import React, { useContext } from "react";
import { InputContext } from ".././Context/InputContext";
import { InputData, MatchInfo } from "./Match";

interface ChildComponentProps {
  setMatchesInfo: React.Dispatch<React.SetStateAction<MatchInfo[] | null>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
}

export function FetchButton({ setMatchesInfo, setLoading }: ChildComponentProps) {
  const inputData = useContext<InputData | null>(InputContext);

  const fetchMatches = async () => {
    if (inputData?.playerRegion == undefined) window.alert("Invalid Region");
    else {
      try {
        setLoading(true);
        const response = await axios.post(
          "https://opgg-production.up.railway.app/api/performAction",
          //"http://localhost:8080/api/performAction",
          {
            actionType: "getMatchHistory",
            inputData: inputData,
          }
        );
        if (response !== null) setMatchesInfo(response.data);
      } catch (error) {
        console.error("Error fetching matches:", error);
      }
      setLoading(false);
    }
  };

  return (
    <button
      className="formButton"
      onClick={(e) => {
        e.preventDefault();
        fetchMatches();
      }}
    >
      fetch
    </button>
  );
}

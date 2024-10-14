import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

interface MatchInfo {
  win: boolean;
  playerName: string;
  championName: string;
  level: number;
  score: string;
  items: number[];
}
export function Match(matchInfo: MatchInfo) {
  return (
    <tr>
      <td>{matchInfo.win}</td>
      <td className="td">
        {matchInfo.championName + " "} {matchInfo.level}
      </td>
      <td>{matchInfo.score}</td>
    </tr>
  );
}

export function Matches({ onFetch }: { onFetch: () => void }) {
  const [matches, setMatches] = useState<MatchInfo[]>([]);
  
  const fetchMatches = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/matches");
      setMatches(response.data);
      onFetch();
    } catch (error) {
      onFetch();
      console.error("Error fetching matches:", error);
    }
  };
  
  useEffect(() => {
    fetchMatches();
    
  }, []);
  return matches.map((match: MatchInfo) => {
    console.log(match);
    return <Match {...match} />;
  });
}

import "./App.css";

export interface MatchInfo {
  win: boolean;
  playerName: string;
  championName: string;
  level: number;
  score: string;
  items: number[];
}
export interface InputData {
  playerRegion?: string;
  playerName?: string;
  playerTag?: string;
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

export function Matches({ matches }: { matches: MatchInfo[] | null}) {
  if (matches != null)
    return matches.map((match: MatchInfo) => {
      return <Match {...match} />;
    });
}

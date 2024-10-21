import "../App.css";
import { ChampionProfile } from "./ChampionProfile";
import { ItemsMapping } from "./ItemsMapping";
import { Summs } from "./Summs";

export interface MatchInfo {
  win: boolean;
  duration: number;
  playerName: string;
  summonerSpells: string[];
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
  const score = matchInfo.score.split("/");
  let kda;
  if (Number(score[1]) == 0) kda = Number(score[0]) + Number(score[2]);
  else kda = (Number(score[0]) + Number(score[2])) / Number(score[1]);

  return (
    <tr className="Entry">
      <td className="ChampSumms">
        <ChampionProfile
          champName={matchInfo.championName}
          level={matchInfo.level}
        />
        <Summs
          summ0={matchInfo.summonerSpells[0]}
          summ1={matchInfo.summonerSpells[1]}
        />
      </td>
      <td>
        <div className="InputGroup">
          <div className={matchInfo.win ? "Victory" : "Defeat"}>
            {matchInfo.win ? "Victory" : "Defeat"}
          </div>
          {((matchInfo.duration / 60) | 0) +
            " mins, " +
            (matchInfo.duration % 60) +
            "secs"}
        </div>
      </td>
      <ItemsMapping items={matchInfo.items} />
      <td className="Score">
        {matchInfo.championName + " " + matchInfo.score}
        <div className={"InputGroup " + (kda >= 1 ? "Victory" : "Defeat")}>
          {"KDA= " + kda.toPrecision(2)}
        </div>
      </td>
    </tr>
  );
}

export function Matches({ matches }: { matches: MatchInfo[] | null }) {
  if (matches != null)
    return matches.map((match: MatchInfo) => {
      return <Match {...match} />;
    });
}

import "../App.css";
import { ChampionProfile } from "./ChampionProfile";
import { ItemsMapping } from "./ItemsMapping";
import { Summs } from "./Summs";
import TeamComponent from "./TeamComponent";

export interface Player {
  playerName: string;
  championName: string;
}
export interface MatchInfo {
  win: boolean;
  duration: number;
  playerName: string;
  summonerSpells: string[];
  championName: string;
  level: number;
  score: string;
  items: number[];
  team1: Player[];
  team2: Player[];
}
export interface InputData {
  playerRegion?: string;
  playerName?: string;
  playerTag?: string;
}
// eslint-disable-next-line react-refresh/only-export-components
export function getSrcFromChampionName(championName: string): string {
  return (
    "https://ddragon.leagueoflegends.com/cdn/14.20.1/img/champion/" +
    championName +
    ".png"
  );
}

export function Match(matchInfo: MatchInfo) {
  const score = matchInfo.score.split("/");
  let kda;
  const matchOutput = matchInfo.win ? "victory" : "defeat";
  if (Number(score[1]) == 0) kda = Number(score[0]) + Number(score[2]);
  else kda = (Number(score[0]) + Number(score[2])) / Number(score[1]);

  return (
    <tr className={"linear entry " + matchOutput + "Entry"}>
      <td className={matchOutput}></td>
      <td className="stack outputDuration">
        <div className={matchOutput + "Text"}>{matchOutput}</div>
        <div>
          {((matchInfo.duration / 60) | 0) +
            "m " +
            (matchInfo.duration % 60) +
            "s"}
        </div>
      </td>
      <td className="stack bigger">
        <div className="linear">
          <ChampionProfile
            champName={matchInfo.championName}
            level={matchInfo.level}
          />

          <Summs
            summ0={matchInfo.summonerSpells[0]}
            summ1={matchInfo.summonerSpells[1]}
          />
          <div className="stack">
            <div className="score"> {matchInfo.score} </div>
            <div className="score"> {"KDA: " + kda.toPrecision(2)} </div>
          </div>
        </div>

        <ItemsMapping items={matchInfo.items} />
      </td>
      <td className="linear">
        <TeamComponent players={matchInfo.team1} />
        <TeamComponent players={matchInfo.team2} />
      </td>

      <td className={matchOutput} />
    </tr>
  );
}

export function Matches({ matches }: { matches: MatchInfo[] | null }) {
  if (matches != null)
    return matches.map((match: MatchInfo, i: number) => {
      return <Match key={match.duration + i} {...match} />;
      {
        /* key should be match id but it is okay for now */
      }
    });
}

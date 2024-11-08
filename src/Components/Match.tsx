import "../App.css";
import { useState, useEffect } from "react";
import { ChampionProfile } from "./ChampionProfile";
import { ItemsMapping } from "./ItemsMapping";
import { Summs } from "./Summs";
import TeamComponent from "./TeamComponent";
import { MatchInfoPlayer } from "../App.tsx";

export interface Player {
  playerName: string;
  championName: string;
}
export interface MatchInfo {
  win: boolean;
  playerName?: string;
  duration: number;
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
interface MatchComponentChildren {
  id: string;
  matchInfo: MatchInfo;
}
// eslint-disable-next-line react-refresh/only-export-components
export function getSrcFromChampionName(championName: string): string {
  return (
    "https://ddragon.leagueoflegends.com/cdn/14.20.1/img/champion/" +
    championName +
    ".png"
  );
}

export function Match({ matchInfo, id }: MatchComponentChildren) {
  const [opacity, setOpacity] = useState<number>(0.2);

  const handleScroll = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const pageHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;

    const rect = document.getElementById(id)?.getBoundingClientRect();
    if (rect != undefined) {
      if (rect.top < windowHeight / 2 || scrollTop > pageHeight - windowHeight)
        setOpacity(1);
      else if (scrollTop > pageHeight / 6)
        setOpacity(
          (((windowHeight - rect.top) / windowHeight) * scrollTop) /
            windowHeight * 1.5
        );
      else setOpacity((windowHeight - rect.top) / windowHeight);
    }
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const score = matchInfo.score.split("/");
  let kda;
  const matchOutput = matchInfo.win ? "victory" : "defeat";
  if (Number(score[1]) == 0) kda = Number(score[0]) + Number(score[2]);
  else kda = (Number(score[0]) + Number(score[2])) / Number(score[1]);

  return (
    <tr
      id={id}
      style={{ opacity }}
      className={"linear entry " + matchOutput + "Entry"}
    >
      <td className="padding"></td>
      <td className="stack outputDuration">
        <div className="outputText">{matchOutput.toUpperCase()}</div>
        <div className="duration">
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
            <div className="score"> {kda.toPrecision(2) + ":1 KDA"} </div>
          </div>
        </div>

        <ItemsMapping items={matchInfo.items} />
      </td>
      <td className="linear">
        <TeamComponent
          searchedPlayer={matchInfo.playerName}
          players={matchInfo.team1}
        />
        <TeamComponent
          searchedPlayer={matchInfo.playerName}
          players={matchInfo.team2}
        />
      </td>

      <td className="padding" />
    </tr>
  );
}

export function Matches({
  playerMatches,
}: {
  playerMatches: MatchInfoPlayer | null;
}) {
  if (playerMatches != null)
    return (
      <tbody className="matches">
        {playerMatches.matches.map((match: MatchInfo, i: number) => {
          return (
            <Match
              id={"fadeComponent " + i}
              key={match.duration + i}
              matchInfo={{ ...match, playerName: playerMatches.playerName }}
            />
          );
        })}
      </tbody>
    );

  {
    /* key should be match id but it is okay for now */
  }
}

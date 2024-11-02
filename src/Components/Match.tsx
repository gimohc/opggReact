import "../App.css";
import React, { useState, useEffect } from "react";
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
// eslint-disable-next-line react-refresh/only-export-components
export function getSrcFromChampionName(championName: string): string {
  return (
    "https://ddragon.leagueoflegends.com/cdn/14.20.1/img/champion/" +
    championName +
    ".png"
  );
}

export function Match({ matchInfo }: { matchInfo: MatchInfo }) {
  const [opacity, setOpacity] = useState<number>(0);

  /*const handleScroll = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    const rect = document
      .getElementById("fadeComponent")
      ?.getBoundingClientRect();
    if (rect != undefined) {
      const fadeInPoint = window.innerHeight - rect.top; // window.innerHeight / 2;

      if (scrollTop <= fadeInPoint) setOpacity(scrollTop / fadeInPoint);
      else setOpacity(fadeInPoint / window.innerHeight);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
*/
  useEffect(() => {
    const handleScroll = () => {
      const component = document.getElementById("fadeComponent");
      const rect = component?.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      if (rect != undefined) {
        // Calculate the position of the component
        const fadeInPoint = windowHeight - rect.top;
        const fadeOutPoint = windowHeight + rect.height;

        if (fadeInPoint > 0 && fadeInPoint <= windowHeight) {
          setOpacity(fadeInPoint / windowHeight);
        } else if (fadeInPoint > windowHeight && fadeInPoint <= fadeOutPoint) {
          setOpacity(1 - (fadeInPoint - windowHeight) / windowHeight);
        } else {
          setOpacity(0);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const score = matchInfo.score.split("/");
  let kda;
  const matchOutput = matchInfo.win ? "victory" : "defeat";
  if (Number(score[1]) == 0) kda = Number(score[0]) + Number(score[2]);
  else kda = (Number(score[0]) + Number(score[2])) / Number(score[1]);

  return (
    <tr
      id="fadeComponent"
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
    return playerMatches.matches.map((match: MatchInfo, i: number) => {
      return (
        <Match
          key={match.duration + i}
          matchInfo={{ ...match, playerName: playerMatches.playerName }}
        />
      );
      {
        /* key should be match id but it is okay for now */
      }
    });
}

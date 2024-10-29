import { useContext } from "react";
import { getSrcFromChampionName, Player } from "./Match";
import { InputContext } from "../Context/InputContext";

export default function TeamComponent({ players }: { players: Player[] }) {
  const input = useContext(InputContext);

  return (
    <div className="stack teamList">
      {players.map((player, i) => {
        let className = "";
        if (player.playerName == input?.playerName)
          className = " selectedPlayer";

        return (
          <div key={player.playerName + i} className="linear noMargin"> {/* key should be puuid but it is okay for now */}
            <img
              className="matchChampionsIcon"
              src={getSrcFromChampionName(player.championName)}
            />
            <span className={"matchPlayerName" + className}>
              {player.playerName.length > 10
                ? player.playerName.slice(0, 10) + ".."
                : player.playerName}
            </span>
          </div>
        );
      })}
    </div>
  );
}

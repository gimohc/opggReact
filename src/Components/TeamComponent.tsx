import { getSrcFromChampionName, Player } from "./Match";

interface TeamComponentChildren {
  searchedPlayer?: string;
  players : Player[];
}

export default function TeamComponent({searchedPlayer, players }: TeamComponentChildren) {

  return (
    <div className="stack teamList">
      {players.map((player, i) => {
        let className = "";
        if (player.playerName == searchedPlayer)
          className = " selectedPlayer";

        return (
          <div key={player.playerName + i} className="linear noMargin"> {/* key should be puuid but it is okay for now */}
            <img
              className="matchChampionsIcon"
              src={getSrcFromChampionName(player.championName)}
            />
            <span className={"matchPlayerName" + className}>
              {player.playerName.length > 9
                ? player.playerName.slice(0, 9) + ".."
                : player.playerName}
            </span>
          </div>
        );
      })}
    </div>
  );
}

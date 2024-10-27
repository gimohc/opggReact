import { Player } from "./Match";

export default function TeamComponent({ players }: { players: Player[] }) {
  return (
    <div className="stack teamList">
      {players.map((player) => {
        return (
          <div className="linear noMargin">
            <img
              className="matchChampionsIcon"
              src={
                "https://ddragon.leagueoflegends.com/cdn/14.20.1/img/champion/" +
                player.championName +
                ".png"
              }
            />
            <div className="playerName">{player.playerName}</div>
          </div>
        );
      })}
    </div>
  );
}

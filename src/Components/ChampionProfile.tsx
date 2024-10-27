export interface ChampionProfileProps {
  champName: string;
  level: number;
}
export function ChampionProfile({
  champName: name,
  level,
}: ChampionProfileProps) {
  return (
    <div className="linear">
      <div className="level"> {level} </div>
      <img
        className="mainChampionIcon"
        src={
          "https://ddragon.leagueoflegends.com/cdn/14.20.1/img/champion/" +
          name +
          ".png"
        }
      />
    </div>
  );
}

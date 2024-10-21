export interface ChampionProfileProps {
  champName: string;
  level: number;
}
export function ChampionProfile({
  champName: name,
  level,
}: ChampionProfileProps) {
  return (
    <>
      <div className="Level"> {level} </div>
      <img
        className="Champion"
        src={
          "https://ddragon.leagueoflegends.com/cdn/14.20.1/img/champion/" +
          name +
          ".png"
        }
      />
    </>
  );
}

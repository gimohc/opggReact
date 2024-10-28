import { getSrcFromChampionName } from "./Match";

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
      <img className="mainChampionIcon" src={getSrcFromChampionName(name)} />
    </div>
  );
}

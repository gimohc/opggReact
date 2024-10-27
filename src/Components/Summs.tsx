interface SummsProps {
  summ0: string;
  summ1: string;
}
export function Summs({ summ0, summ1 }: SummsProps) {
  return (
    <div className="stack">
      <img
        className="summonerSpellIcon"
        src={
          "https://ddragon.leagueoflegends.com/cdn/14.20.1/img/spell/" +
          summ0 +
          ".png"
        }
      />
      <img
        className="summonerSpellIcon"
        src={
          "https://ddragon.leagueoflegends.com/cdn/14.20.1/img/spell/" +
          summ1 +
          ".png"
        }
      />
    </div>
  );
}

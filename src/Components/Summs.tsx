interface SummsProps {
  summ0: string;
  summ1: string;
}
export function Summs({ summ0, summ1 }: SummsProps) {
  return (
    <div className="Summs">
      <img
        className="Sum"
        src={
          "https://ddragon.leagueoflegends.com/cdn/14.20.1/img/spell/" +
          summ0 +
          ".png"
        }
      />
      <img
        className="Sum"
        src={
          "https://ddragon.leagueoflegends.com/cdn/14.20.1/img/spell/" +
          summ1 +
          ".png"
        }
      />
    </div>
  );
}

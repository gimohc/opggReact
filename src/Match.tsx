import "./App.css";

export function Match({
  matchOutput,
  img,
  championName,
  score,
}: {
  matchOutput: string;
  img: string;
  championName: string;
  score: string;
}) {
  return (
    <tr>
      <td>{matchOutput}</td>
      <td className='td'>
        <img src={img} alt={championName} />
      </td>
      <td>{score}</td>
    </tr>
  );
}

import { useState, useRef } from "react";
import { Match } from "./Match";
import { RegionInput } from "./RegionInput";
import "./App.css";

const operations = {
  ENTERING: "entering",
  PROCESSING: "processing",
  INVALID: "invalid",
  VALID: "valid",
} as const;
function App() {
  const name = useRef<HTMLInputElement>(null);
  const tagline = useRef<HTMLInputElement>(null);
  const region = useRef<HTMLSelectElement>(null);

  const [currentOperation, setCurrentOperation] = useState<string>(
    operations.ENTERING
  );

  return (
    <>
      <RegionInput ref={region} />
      <br />

      <input ref={name} placeholder="In game name" />
      <input ref={tagline} placeholder="tagline" className="tagline" />
      <button
        onClick={() => {
          setCurrentOperation(operations.PROCESSING);
        }}
      >
        view
      </button>
      <br />
      <br />
      <table>
        <Match
          matchOutput="victory"
          img="e"
          championName="e"
          score="1/2/3"
        ></Match>
      </table>
      { /* for debugging purposes <div>{name.current?.value} {tagline.current?.value} {region.current?.value} </div> */ }
    </>
  );
}

export default App;

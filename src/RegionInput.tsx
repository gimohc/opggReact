import { useState, forwardRef } from "react";

export const RegionInput = forwardRef<HTMLSelectElement>(function RegionInput(
  props,
  ref
) {
  const [region, setRegion] = useState("europe");

  return (
    <>
      <label>Region</label>
      <select
        ref={ref}
        name="region"
        onChange={(e) => setRegion(e.target.value)}
      >
        <option value="americas"> Americas </option>
        <option value="europe"> Europe </option>
        <option value="asia"> Asia </option>
        <option value="sea"> Oceania </option>
      </select>
    </>
  );
});

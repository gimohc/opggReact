import React from "react";

interface RegionInputProps {
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
}
export function RegionInput(
  props: RegionInputProps,
) {
  return (
    <>
      <label className="label">Region</label>
      <select defaultValue={undefined} className="select" onChange={props.onChange} name="region" required>
        <option value="americas"> NA </option>
        <option value="americas"> BR </option>
        <option value="americas"> LAN </option>
        <option value="americas"> LAS </option>
        <option value="europe"> EUNE </option>
        <option value="europe"> EUW </option>
        <option value="europe"> ME </option>
        <option value="europe"> TR </option>
        <option value="europe"> RU </option>
        <option value="asia"> KR </option>
        <option value="asia"> JP </option>
        <option value="sea"> OCE </option>
        <option value="sea"> PH </option>
        <option value="sea"> SG </option>
        <option value="sea"> TH </option>
        <option value="sea"> TW </option>
        <option value="sea"> VN </option>
      </select>
    </>
  );
};

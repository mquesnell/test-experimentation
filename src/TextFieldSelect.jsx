/** @format */

import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";

const canadianProvinces = [
  {
    value: "NONE",
    label: "Pick One...",
  },
  {
    value: "BC",
    label: "British Columbia",
  },
  {
    value: "AB",
    label: "Alberta",
  },
  {
    value: "NL",
    label: "Newfoundland and Labrador",
  },
  {
    value: "PE",
    label: "Prince Edward Island",
  },
  {
    value: "QC",
    label: "Quebec",
  },
  {
    value: "MB",
    label: "Manitoba",
  },
];

export default function TextFieldSelect() {
  const [province, setProvince] = useState("NONE");

  return (
    <TextField
      id="text-field-select"
      data-testid="sel"
      select
      label="Oh, Canada"
      value={province}
      variant="outlined"
      onChange={(event) => {
        setProvince(event.target.value);
      }}
      SelectProps={{ native: true }}>
      {canadianProvinces.map((option) => (
        <option key={option.value} value={option.value} data-testid="opt">
          {option.label}
        </option>
      ))}
    </TextField>
  );
}

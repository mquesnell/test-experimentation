/** @format */

import React, { useState } from "react";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function DropDown() {
  const [country, setCountry] = useState("none");
  const classes = useStyles();

  const handleChange = (event) => {
    setCountry(event.target.value);
  };

  return (
    <>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="drop-down-label">Country</InputLabel>
        <Select
          labelId="drop-down-label"
          data-testid="drop-down-select"
          value={country}
          label="Country"
          onChange={handleChange}>
          <MenuItem value="none">
            <em>None</em>
          </MenuItem>
          <MenuItem value="usa">United States of America</MenuItem>
          <MenuItem value="can">Canada</MenuItem>
          <MenuItem value="mex">Mexico</MenuItem>
        </Select>
      </FormControl>
    </>
  );
}

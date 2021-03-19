/** @format */

import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import ProTip from "./ProTip";
import Button from "@material-ui/core/Button";
import CheckIcon from "@material-ui/icons/Check";
import DropDown from "./DropDown";
import TextFieldSelect from "./TextFieldSelect";
import TextField from "@material-ui/core/TextField";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 150,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function App() {
  const [response, setResponse] = useState("no response");
  const [count, setCount] = useState(1);
  const [likeTomatoes, setLikeTomatoes] = useState("no");

  const classes = useStyles();

  const handleButton = () => {
    setCount(count + 1);
    setResponse(`You clicked the button ${count} time(s)`);
  };

  return (
    <Container maxWidth="md">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Example Material-UI/React Application
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={handleButton}
          startIcon={<CheckIcon data-testid="check-icon-on-ok-btn" />}>
          ok
        </Button>
        <ProTip />
        <Typography>{response}</Typography>
        <DropDown />
        <TextFieldSelect />
        <div>
          <TextField id="city-name" label="City" variant="outlined" />
          <TextField id="county-name" label="County" variant="outlined" />
        </div>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">Like Tomatoes?</FormLabel>
          <RadioGroup
            row
            name="tomato-pref"
            value={likeTomatoes}
            onChange={(event) => {
              setLikeTomatoes(event.target.value);
            }}>
            <FormControlLabel
              value="no"
              control={<Radio inputProps={{ "data-testid": "radio-no" }} />}
              label="No"
            />
            <FormControlLabel
              value="yes"
              control={<Radio inputProps={{ "data-testid": "radio-yes" }} />}
              label="Yes"
            />
          </RadioGroup>
        </FormControl>
        <Copyright />
      </Box>
    </Container>
  );
}

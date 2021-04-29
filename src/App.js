/** @format */

import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Container from "@material-ui/core/Container";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
import Link from "@material-ui/core/Link";
import MenuItem from "@material-ui/core/MenuItem";
import Paper from "@material-ui/core/Paper";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import CheckIcon from "@material-ui/icons/Check";
import React, { useState } from "react";
import DropDown from "./DropDown";
import ProTip from "./ProTip";
import TextFieldSelect from "./TextFieldSelect";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 150,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  selectGridTitle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  selectPaperMUI: {
    background: "aliceblue",
    padding: "10px",
  },
  selectPaperMUINative: {
    background: "cornsilk",
    padding: "10px",
  },
  selectPaperTextField: {
    background: "darkseagreen",
    padding: "10px",
  },
  selectPaperTextFieldNative: {
    background: "lavender",
    padding: "10px",
  },
  notePaper: {
    padding: "10px",
  },
  card: {
    background: "lightgray",
    marginBottom: "20px",
  },
  textField: {
    paddingRight: "10px",
    marginTop: "20px",
  },
  buttonBox: {
    display: "flex",
    alignItems: "center",
  },
  responseText: {
    paddingLeft: "20px",
  },
  leadingLabelText: {
    paddingRight: "20px",
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
  const [response, setResponse] = useState("Click the button");
  const [count, setCount] = useState(1);
  const [likeTomatoes, setLikeTomatoes] = useState("no");
  const [defaultSelectValue, setDefaultSelectValue] = useState("none");
  const [age, setAge] = useState(defaultSelectValue);

  const classes = useStyles();

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleSeeTheProblem = () => {
    if (defaultSelectValue === "") {
      setDefaultSelectValue("none");
    } else {
      setDefaultSelectValue("");
    }
  };
  const handleButton = () => {
    setCount(count + 1);
    setResponse(`You clicked the button ${count} time(s)`);
  };

  return (
    <>
      <Container maxWidth="lg">
        <Box my={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            Example Material-UI/React Application
          </Typography>
        </Box>
        <Card variant="outlined" className={classes.card}>
          <CardContent>
            <Box className={classes.buttonBox}>
              <Button
                variant="contained"
                color="primary"
                onClick={handleButton}
                startIcon={<CheckIcon data-testid="check-icon-on-ok-btn" />}
              >
                ok
              </Button>
              <Typography className={classes.responseText}>
                {response}
              </Typography>
            </Box>
          </CardContent>
        </Card>
        <Card variant="outlined" className={classes.card}>
          <CardContent>
            <Box className={classes.buttonBox}>
              <Typography className={classes.leadingLabelText}>
                An instance of a MUI Select:
              </Typography>
              <DropDown />
            </Box>
          </CardContent>
        </Card>
        <Card variant="outlined" className={classes.card}>
          <CardContent>
            <Box className={classes.buttonBox}>
              <Typography className={classes.leadingLabelText}>
                An instance of a TextField Native Select:
              </Typography>
              <TextFieldSelect />
            </Box>
          </CardContent>
        </Card>

        <Card variant="outlined" className={classes.card}>
          <CardContent>
            <Typography variant="h5">Some Text Fields</Typography>
            <TextField
              id="city-name"
              label="City"
              variant="outlined"
              className={classes.textField}
            />
            <TextField
              id="county-name"
              label="County"
              variant="outlined"
              className={classes.textField}
            />
          </CardContent>
        </Card>
        <Card variant="outlined" className={classes.card}>
          <FormControl component="fieldset" className={classes.formControl}>
            <FormLabel component="legend">Like Tomatoes?</FormLabel>
            <RadioGroup
              row
              name="tomato-pref"
              value={likeTomatoes}
              onChange={(event) => {
                setLikeTomatoes(event.target.value);
              }}
            >
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
        </Card>
        <Card variant="outlined" className={classes.card}>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12} className={classes.selectGridTitle}>
                <Typography variant="h5">
                  Comparison of Select Controls
                </Typography>
              </Grid>
              <Grid item xs={3}>
                <Paper className={classes.selectPaperMUI}>
                  <Typography>MUI Select</Typography>
                  <FormControl
                    variant="outlined"
                    className={classes.formControl}
                  >
                    <InputLabel id="demo-simple-select-outlined-label">
                      Age
                    </InputLabel>
                    <Select
                      data-testid="mui-select"
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      value={age}
                      onChange={handleChange}
                      label="Age"
                    >
                      <MenuItem value={defaultSelectValue}>
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper className={classes.selectPaperMUINative}>
                  <Typography>Native Select</Typography>
                  <FormControl
                    variant="outlined"
                    className={classes.formControl}
                  >
                    <InputLabel htmlFor="outlined-age-native-simple">
                      Age
                    </InputLabel>
                    <Select
                      native
                      value={age}
                      onChange={handleChange}
                      label="Age"
                      inputProps={{
                        "data-testid": "mui-native-select",
                        name: "age",
                        id: "outlined-age-native-simple",
                      }}
                    >
                      <option aria-label="None" value={defaultSelectValue}>
                        None
                      </option>
                      <option value={10}>Ten</option>
                      <option value={20}>Twenty</option>
                      <option value={30}>Thirty</option>
                    </Select>
                  </FormControl>
                </Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper className={classes.selectPaperTextField}>
                  <Typography>TextField MUI Select</Typography>
                  <FormControl className={classes.formControl}>
                    <TextField
                      id="tf-simple-select"
                      data-testid="tf-mui-select"
                      select
                      label="Age"
                      value={age}
                      variant="outlined"
                      onChange={handleChange}
                    >
                      <MenuItem value={defaultSelectValue}>
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </TextField>
                  </FormControl>
                </Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper className={classes.selectPaperTextFieldNative}>
                  <Typography>TextField Native Select</Typography>
                  <FormControl className={classes.formControl}>
                    <TextField
                      id="tf-native-select"
                      data-testid="tf-native-select"
                      select
                      label="Age"
                      value={age}
                      variant="outlined"
                      onChange={handleChange}
                      SelectProps={{
                        native: true,
                      }}
                    >
                      <option value={defaultSelectValue}>None</option>
                      <option value={10}>Ten</option>
                      <option value={20}>Twenty</option>
                      <option value={30}>Thirty</option>
                    </TextField>
                  </FormControl>
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper className={classes.notePaper}>
                  <Typography>
                    Native variants: when the value of an option is "" (empty
                    string) but the display text is not an empty string, the
                    display value is superimposed on the label value.
                  </Typography>
                  <Button variant="contained" onClick={handleSeeTheProblem}>
                    Change the value of None
                  </Button>
                  <Typography>{`Current value for None: ${
                    defaultSelectValue === ""
                      ? "(empty string): select None in one of the boxes to see the problem"
                      : defaultSelectValue
                  }`}</Typography>
                </Paper>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        <ProTip />
        <Copyright />
      </Container>
    </>
  );
}

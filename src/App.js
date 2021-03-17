/** @format */

import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import ProTip from "./ProTip";
import Button from "@material-ui/core/Button";

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
        <Button variant="contained" color="primary" onClick={handleButton}>
          ok
        </Button>
        <ProTip />
        <Typography>{response}</Typography>
        <Copyright />
      </Box>
    </Container>
  );
}

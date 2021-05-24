import "./App.css";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, TextField, Button } from "@material-ui/core";
import ButtonAppBar from "./NavBar.js";
import Checkbox from "@material-ui/core/Checkbox";

// I have installed material ui core and material ui icons from material-ui.com to include material ui features in this react app. these are installed separately in every rect app in order to use it. These are not installed globally as we may use bootstrap or some other thing in our app.
// for reference on material ui go to https://material-ui.com

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: 15,
    width: 350,
    backgroundColor: "white",
    margin: "0 auto",
    marginTop: 100,
    textAlign: "center",
  },
  input: {
    width: "95%",
    marginBottom: 12,
    backgroundColor: "white",
  },
  button: {
    width: "95%",
    marginBottom: 12,
    backgroundColor: "grey",
  },
  checkbox: {
    textAlign: "left",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ButtonAppBar />
      <Paper elevation={10} className={classes.paper}>
        <h1>Login</h1>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            id="filled-basic"
            label="Enter e-mail:"
            variant="filled"
            className={classes.input}
          />
          <TextField
            id="filled-basic"
            label="Password:"
            variant="filled"
            className={classes.input}
          />
          <Checkbox
            color="primary"
            inputProps={{ "aria-label": "secondary checkbox" }}
            className={classes.checkbox}
          />
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
          >
            LOGIN
          </Button>
        </form>
      </Paper>
    </div>
  );
}

export default App;

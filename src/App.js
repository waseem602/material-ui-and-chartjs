import "./App.css";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
// I have installed material ui core and material ui icons from material-ui.com to include material ui features in this react app. these are installed separately in every rect app in order to use it. These are not installed globally as we may use bootstrap or some other thing in our app.
// for reference on material ui go to https://material-ui.com

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper elevation={0} />
      <Paper />
      <Paper elevation={3} />
    </div>
  );
}

export default App;

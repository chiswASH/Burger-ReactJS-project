import React from "react";
import classes from "./BuildControl.css";

const buildControl = props => (
  <div className={classes.BuildControl}>
    <div className={classes.Label}>{props.label}</div>
    <button className={classes.Less}>Less</button>
    <button onClick={props.added} className={classes.Less}>
      More
    </button>
  </div>
);

export default buildControl;
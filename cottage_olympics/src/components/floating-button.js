import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddCircleIcon from "@material-ui/icons/AddCircle";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  root: {
    height: 80,
    position: "fixed",
    bottom: 40,
    right: 10,
    backdropFilter: "blur(1px)",
    WebkitBackdropFilter: "blur(1px)",
    width: "100%",
    textAlign: "right",
  },
}));

const FloatingActionButtonSize = ({ action, buttonText }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div onClick={action}>
        <Fab
          variant="extended"
          color="primary"
          aria-label="add"
          className={classes.margin}
        >
          <AddCircleIcon className={classes.extendedIcon} />
          {buttonText}
        </Fab>
      </div>
    </div>
  );
};

export default FloatingActionButtonSize;

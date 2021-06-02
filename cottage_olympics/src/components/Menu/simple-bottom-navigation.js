import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import SportsTennis from "@material-ui/icons/SportsTennis";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Equalizer from "@material-ui/icons/Equalizer";
import styled from "styled-components";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: "100%",
    maxWidth: "inherit",
    position: "fixed",
    bottom: 0,
    backgroundColor: "#1B065E",
  },
  test: {
    color: "#FCC8C2",
  },
});
const BottomNav = styled(BottomNavigationAction)`
  .MuiBottomNavigationAction-root.Mui-selected {
    color: white !important;
  }
`;
export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    console.log(newValue);
    setValue(newValue);
  };
  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
      showLabels
      className={classes.root}
    >
      <BottomNav
        component={Link}
        to="/home"
        className={classes.test}
        label="Lajit"
        icon={<SportsTennis />}
      ></BottomNav>

      <BottomNav
        component={Link}
        to="/statistics"
        className={classes.test}
        label="Tilastot"
        icon={<Equalizer />}
      />
      <BottomNav
        component={Link}
        to="/pictures"
        className={classes.test}
        label="Kuvat?"
        icon={<FavoriteIcon />}
      />
    </BottomNavigation>
  );
}

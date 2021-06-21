import { Box, makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import podium from "../../images/podium.png";
import scoreService from "../../services/scoreService";
import usersService from "../../services/usersService";
import { calculatePoints } from "../functions";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: "100%",
  },
  header: {
    textAlign: "center",
  },
  players1: {
    position: "fixed",
    marginTop: "1.75rem",
    left: "5rem",
  },
  players2: {
    position: "fixed",
    marginTop: "0rem",
    left: "45%",
    right: 0,
  },
  players3: {
    position: "fixed",
    marginTop: "3rem",
    right: "4rem",
  },
  playerswrapper: {
    fontWeight: 700,
  },
}));

const Dashboard = () => {
  const [users, setUsers] = useState([]);

  const classes = useStyles();

  useEffect(() => {
    getEverything();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function getEverything() {
    var loadedUsers = await usersService.getAll();
    var loadedScores = await scoreService.getAll();
    calculatePoints(loadedScores, loadedUsers);
    if (loadedUsers && loadedUsers.length > 0) {
      var orderedUsers = loadedUsers.sort((a, b) =>
        a.totalPoints ? a.totalPoints - b.totalPoints : -1
      );
      orderedUsers = orderedUsers.reverse().slice(0, 3);
      console.log(orderedUsers);
      [orderedUsers[0], orderedUsers[1]] = [orderedUsers[1], orderedUsers[0]];

      setUsers(orderedUsers);
    }
  }
  return (
    <div>
      <h2 className={classes.header}>Top 3 kymppiä</h2>
      <Box>
        {users.length > 0 ? (
          <div>
            <div className={classes.playerswrapper}>
              <div className={classes.players1}>{users[0].UserName}</div>
              <div className={classes.players2}>{users[1].UserName}</div>
              <div className={classes.players3}>{users[2].UserName}</div>
            </div>
            <img alt="Heh" src={podium} className={classes.root} />
          </div>
        ) : (
          <div>Ei tilastoja</div>
        )}
      </Box>
      <h2 className={classes.header}>Satunnainen kuva</h2>
    </div>
  );
};

export default Dashboard;

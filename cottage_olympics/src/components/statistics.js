import React, { useState, useEffect } from "react";
import scoreService from "../services/scoreService";
import sportsService from "../services/sportsService";
import userService from "../services/usersService";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import _, { indexOf, iteratee } from "lodash";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#5c0057",
    color: theme.palette.common.white,
    fontWeight: "600",
  },
  body: {
    fontSize: 14,
    color: "#FFF",
    fontWeight: "500",
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: "#8940B9",
    },
    "&:nth-of-type(even)": {
      backgroundColor: "#4b0082",
    },
    color: "#FFF",
  },
}))(TableRow);

// function createData(name, totalPoints) {
//   return { name, totalPoints };
// }

const useStyles = makeStyles({
  table: {},
});

const Statistics = () => {
  const [users, setUsers] = useState([]);
  const [scores, setScores] = useState([]);
  const [sports, setSports] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    getEverything();
  }, []);

  async function getEverything() {
    var promises = [];
    // var p1 = async () => {
    //   var users = await userService.getAll();
    //   setUsers(users);
    // };
    var p2 = async () => {
      var loadedUsers = await userService.getAll();

      var asd = await scoreService.getAll();
      var newScores = calculatePoints(asd, loadedUsers);
      var orderedUsers = loadedUsers.sort(
        (a, b) => b.totalPoints - a.totalPoints
      );

      setScores(asd);
      setUsers(orderedUsers);
    };

    var p3 = async () => {
      var sports = await sportsService.getAll();
      setSports(sports);
    };
    promises.push(p2(), p3());
    await Promise.all(promises);
  }

  function calculatePoints(asd, loadedUsers) {
    var groupedSports = _.groupBy(asd, "SportId");
    var first = _.values(groupedSports);
    for (let index = 0; index < first.length; index++) {
      const element = first[index];
      calculateSportPoints(element, loadedUsers);
    }

    function calculateSportPoints(sportScores, loadedUsers) {
      var topToBottom = sportScores.sort((a, b) => a - b);
      for (let index = 0; index < topToBottom.length; index++) {
        var pointsForSport = 0;
        switch (index) {
          case 0:
            pointsForSport = 10;
            break;
          case 1:
            pointsForSport = 8;
            break;
          case 3:
            pointsForSport = 6;
            break;
          case 4:
            pointsForSport = 5;
            break;
          case 5:
            pointsForSport = 4;
            break;
          case 6:
            pointsForSport = 3;
            break;
          case 7:
            pointsForSport = 2;
            break;
          case 8:
            pointsForSport = 1;
            break;
          default:
            pointsForSport = 0;
            break;
        }
        const userId = topToBottom[index].UserId;
        addPointsToUser(userId, pointsForSport, loadedUsers);
      }
    }

    function addPointsToUser(userId, pointsForSport, loadedUsers) {
      var user = loadedUsers.find((a) => a.UserId === userId);
      if (user) {
        user.totalPoints = user.totalPoints
          ? user.totalPoints + pointsForSport
          : pointsForSport;
      }
    }
  }

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Atleetikko</StyledTableCell>
            <StyledTableCell align="right">Sijoitus</StyledTableCell>
            <StyledTableCell align="right">Pisteet</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <StyledTableRow key={user.UserId}>
              <StyledTableCell component="th" scope="row">
                {user.UserName}
              </StyledTableCell>
              <StyledTableCell align="right">
                {users.indexOf(user) + 1}
              </StyledTableCell>
              <StyledTableCell align="right">
                {user.totalPoints}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Statistics;

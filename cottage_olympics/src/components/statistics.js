import React, { useState, useEffect } from "react";
import scoreService from "../services/scoreService";
import userService from "../services/usersService";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { calculatePoints } from "./functions";

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
  const classes = useStyles();

  useEffect(() => {
    getEverything();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function getEverything() {
    var loadedUsers = await userService.getAll();
    var loadedScores = await scoreService.getAll();
    calculatePoints(loadedScores, loadedUsers);
    if (loadedUsers && loadedUsers.length > 0) {
      var orderedUsers = loadedUsers.sort((a, b) =>
        a.totalPoints ? a.totalPoints - b.totalPoints : -1
      );
      orderedUsers = orderedUsers.reverse();
      console.log(orderedUsers);
      setUsers(orderedUsers);
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

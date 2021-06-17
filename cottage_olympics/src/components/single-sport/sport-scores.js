import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

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

const SportScores = (props) => {
  const classes = useStyles();
  console.log(props);
  let { scores, sport } = props;
  console.log("pisteet", scores);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Atleetti</StyledTableCell>
            <StyledTableCell align="right">Sijoitus</StyledTableCell>
            <StyledTableCell align="right">
              Tulos ({sport.UnitShort})
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {scores.map((score) => (
            <StyledTableRow key={score.ScoreId}>
              <StyledTableCell component="th" scope="row">
                {score.UserName}
              </StyledTableCell>
              <StyledTableCell align="right">
                {scores.indexOf(score) + 1}
              </StyledTableCell>
              <StyledTableCell align="right">
                {score.TotalScore}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default SportScores;

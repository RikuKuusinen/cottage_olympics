import { Box } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import scoreService from "../../services/scoreService";
import sportsService from "../../services/sportsService";
import SportScores from "./sport-scores";

const SingleSport = (props) => {
  const [sport, setSport] = useState({});
  const [scores, setScores] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    sportsService.getSingle(id).then((result) => {
      console.log(result);
      setSport(result);
    });
  }, [id]);

  useEffect(() => {
    scoreService.getScoresBySportId(id).then((result) => {
      console.log(result);
      var res = result.sort((a, b) => {
        return b.TotalScore - a.TotalScore;
      });

      setScores(res);
    });
  }, [id]);

  console.log(id);
  return (
    <div>
      <h2>{sport.SportName}</h2>

      <Box>
        <div>{sport.SportDescription}</div>
      </Box>
      <h2>Lajin tulokset</h2>
      {scores.length > 0 ? (
        <SportScores scores={scores}></SportScores>
      ) : (
        <h3>Ei kirjattuja tuloksia</h3>
      )}
    </div>
  );
};

export default SingleSport;

import { Box } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import scoreService from "../../services/scoreService";
import sportsService from "../../services/sportsService";
import FloatingActionButtonSize from "../floating-button";
import AddScoreDialog from "./add-score-dialog";
import SportScores from "./sport-scores";

const SingleSport = (props) => {
  const [sport, setSport] = useState({});
  const [scores, setScores] = useState([]);
  const [openAdd, setOpenAdd] = useState(false);
  const [score, setScore] = useState("");

  const { id } = useParams();
  const { user } = props;

  useEffect(() => {
    sportsService.getSingle(id).then((result) => {
      setSport(result);
    });
  }, [id]);

  useEffect(() => {
    scoreService.getScoresBySportId(id).then((result) => {
      var res = result.sort((a, b) => {
        return b.TotalScore - a.TotalScore;
      });

      setScores(res);
    });
  }, [id]);

  const handleSubmit = async (submit) => {
    setOpenAdd(false);
    if (submit) {
      var existingScore = scores.find((s) => s.UserId === user.UserId);

      var upsertObject = {};
      if (existingScore) {
        var updatedScore = {
          scoreId: existingScore.ScoreId,
          totalScore: score,
        };

        upsertObject = updatedScore;
      } else {
        var newScore = {
          sportId: sport.SportId,
          totalScore: score,
          userId: user.UserId,
        };
        upsertObject = newScore;
      }

      var added = await scoreService.upsert(upsertObject);
      console.log(added);
      var newListOfScores = [...scores];
      if (existingScore) {
        var upds = newListOfScores.find(
          (a) => a.ScoreId === existingScore.ScoreId
        );
        upds.TotalScore = score;
      } else {
        var upsertedScore = {
          ScoreId: added.ScoreId,
          UserId: user.UserId,
          UserName: user.UserName,
          TotalScore: score,
        };

        newListOfScores = [...scores, upsertedScore];
      }

      var res = newListOfScores.sort((a, b) => {
        return b.TotalScore - a.TotalScore;
      });
      setScores(res);
    }
    setScore("");
  };

  const openAddScoreModal = (event) => {
    setOpenAdd(true);
  };

  return (
    <div>
      <h2>{sport.SportName}</h2>
      <h3>
        Yksikkö: {sport.Unit} ({sport.UnitShort})
      </h3>
      <Box>
        <div>{sport.SportDescription}</div>
      </Box>
      <h2>Lajin tulokset</h2>
      {scores.length > 0 ? (
        <SportScores scores={scores} sport={sport}></SportScores>
      ) : (
        <h3>Ei kirjattuja tuloksia</h3>
      )}
      <FloatingActionButtonSize
        buttonText={"Lisää/muokkaa tulostasi"}
        action={openAddScoreModal}
      ></FloatingActionButtonSize>
      <AddScoreDialog
        openAdd={openAdd}
        handleSubmit={handleSubmit}
        handleScoreChange={({ target }) => setScore(target.value)}
        score={score}
        sportUnit={sport.Unit}
        sportUnitShort={sport.UnitShort}
      ></AddScoreDialog>
    </div>
  );
};

export default SingleSport;

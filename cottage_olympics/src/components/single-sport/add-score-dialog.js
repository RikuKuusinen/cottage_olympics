import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { DialogContentText } from "@material-ui/core";

const AddScoreDialog = ({
  openAdd,
  handleSubmit,
  score,
  handleScoreChange,
  sportUnit,
  sportUnitShort,
}) => {
  return (
    <div>
      <Dialog
        open={openAdd}
        onClose={handleSubmit}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          Päivitä/lisää tuloksesi
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Yksikkö: {sportUnit} ({sportUnitShort})
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="score"
            label="Tulos"
            type="text"
            fullWidth
            variant="outlined"
            value={score}
            onChange={handleScoreChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleSubmit(false)} color="primary">
            Peruuta
          </Button>
          <Button
            onClick={() => handleSubmit(true)}
            color="primary"
            variant="outlined"
          >
            Tallenna
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default AddScoreDialog;

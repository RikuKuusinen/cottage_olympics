import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const DeleteDialog = ({ open, handleClose }) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        Poistetaanko laji pysyvästi?
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Lajia ei välttämättä voida poistaa jos siihen on jo kirjattu
          suorituksia
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => handleClose(false)} color="primary">
          Peruuta
        </Button>
        <Button onClick={() => handleClose(true)} color="primary" autoFocus>
          Poista
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default DeleteDialog;

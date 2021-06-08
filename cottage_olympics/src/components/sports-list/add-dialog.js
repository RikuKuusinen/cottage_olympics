import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

const AddDialog = ({
  openAdd,
  handleSubmit,
  description,
  name,
  handleNameChange,
  handleDescriptionChange,
}) => {
  return (
    <div>
      <Dialog
        open={openAdd}
        onClose={handleSubmit}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          Lisää uusi mökkiolympialaji
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Nimi"
            type="text"
            fullWidth
            variant="outlined"
            value={name}
            onChange={handleNameChange}
          />
          <TextField
            margin="dense"
            id="description"
            label="Kuvaus"
            type="text"
            fullWidth
            multiline
            rows={2}
            variant="outlined"
            value={description}
            onChange={handleDescriptionChange}
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
export default AddDialog;

import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import CameraAltIcon from "@material-ui/icons/CameraAlt";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  root: {
    maxWidth: "80%",
    maxHeight: "60%",
    padding: "1rem",
  },
}));

const AddPicture = ({
  openAdd,
  handleSubmit,
  picture,
  handleChange,
  sportUnit,
  sportUnitShort,
}) => {
  let myInput = {};

  const [image, setImage] = useState({});
  const classes = useStyles();

  function upload() {
    console.log("lol");
  }
  handleChange = (event) => {
    setImage(URL.createObjectURL(event.target.files[0]));
  };
  return (
    <div>
      <input
        id="myInput"
        type="file"
        accept="image/*"
        ref={(ref) => (myInput = ref)}
        style={{ display: "none" }}
        onChange={handleChange}
      />
      <Dialog
        open={openAdd}
        onClose={handleSubmit}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Lisää kuva </DialogTitle>
        <DialogContent>
          <Button
            variant="contained"
            color="default"
            startIcon={<CameraAltIcon />}
            onClick={(e) => myInput.click()}
          >
            Ota kuva
          </Button>
          <img className={classes.root} alt="Kuva" src={image} />
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
export default AddPicture;

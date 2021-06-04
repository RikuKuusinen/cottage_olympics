import {
  Grid,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import { Avatar, IconButton, List, ListItem } from "material-ui";
import Typography from "material-ui/styles/typography";
import React, { useState, useEffect } from "react";
import FolderIcon from "@material-ui/icons/Folder";
import DeleteIcon from "@material-ui/icons/Delete";
import sportsService from "../../services/sportsService";
import DeleteDialog from "./delete-dialog";
import FloatingActionButtonSize from "../floating-button";
import AddDialog from "./add-dialog";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: "inherit",
    color: "white",
    "& span": {
      color: "white",
      secondary: "white",
    },
    "& .MuiTypography-colorTextSecondary": {
      color: "white",
    },
    title: {
      margin: "0",
    },
  },
  customListItem: {
    border: "2px solid white !important",
    borderRadius: "6px",
    padding: "0.3rem !important",
    backgroundColor: "#8940B9 !important",
    marginBottom: "2px !important",
  },
  removeButton: {
    color: "mediumvioletred",
    border: "2px lightgray outset",
    backgroundColor: "white",
    borderRadius: "50%",
  },
}));

const Home = () => {
  const classes = useStyles();

  const [sports, setSports] = useState([]);
  const [open, setOpen] = useState(false);
  const [deletableSport, setDeletableSport] = useState("");
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [openAdd, setOpenAdd] = useState(false);
  const history = useHistory();

  const handleClose = async (remove) => {
    setOpen(false);
    if (remove) {
      var removed = await sportsService.deleteSport(deletableSport);
      console.log(removed.status === 200);
      if (removed.status === 200) {
        var newSports = [...sports];
        console.log(newSports);
        newSports = newSports.filter((a) => a.SportId !== deletableSport);
        console.log(newSports);

        setSports(newSports);
        setDeletableSport("");
      }
    }
  };

  const handleSubmit = async (submit) => {
    setOpenAdd(false);
    if (submit) {
      var newSport = {
        sportName: name,
        sportDescription: description,
      };
      var added = await sportsService.create(newSport);
      var newlyAdded = {
        SportName: name,
        SportDescription: description,
        SportId: added.SportId,
      };

      setSports([...sports, newlyAdded]);
    }
    setDescription("");
    setName("");
  };

  useEffect(() => {
    sportsService.getAll().then((result) => {
      console.log(result);
      setSports(result);
    });
  }, []);

  const deleteSport = (i) => {
    console.log(i);
    setDeletableSport(i);
    setOpen(true);
  };

  const navigateToSport = (i) => {
    console.log(i);

    history.push("/sport/" + i);
  };

  const openAddModal = (event) => {
    setOpenAdd(true);
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <div className={classes.demo}>
            <List className={classes.demo}>
              {sports.map((sport, i) => (
                <ListItem
                  key={sport.SportId}
                  className={classes.customListItem}
                  onClick={() => navigateToSport(sport.SportId)}
                >
                  <ListItemText
                    primary={sport.SportName}
                    secondary={sport.SportDescription}
                  />
                  <ListItemSecondaryAction>
                    <IconButton
                      edge="end"
                      aria-label="delete"
                      onClick={() => deleteSport(sport.SportId)}
                    >
                      <DeleteIcon className={classes.removeButton} />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              ))}
            </List>
          </div>
        </Grid>
        <DeleteDialog open={open} handleClose={handleClose}></DeleteDialog>
        <AddDialog
          openAdd={openAdd}
          handleSubmit={handleSubmit}
          handleDescriptionChange={({ target }) => setDescription(target.value)}
          handleNameChange={({ target }) => setName(target.value)}
          name={name}
          description={description}
        ></AddDialog>
        <FloatingActionButtonSize
          buttonText={"Lisää uusi laji"}
          action={openAddModal}
        ></FloatingActionButtonSize>
      </Grid>
    </div>
  );
};

export default Home;

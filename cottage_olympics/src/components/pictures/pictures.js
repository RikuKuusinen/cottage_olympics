import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import FloatingActionButtonSize from "../floating-button";
import AddPicture from "./add-picture";
import imageService from "../../services/imageService";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
    opacity: 1,
  },
  gridList: {
    width: "100%",
    height: "100%",
  },
}));

const Pictures = () => {
  const classes = useStyles();
  const [openAdd, setOpenAdd] = useState(false);
  const [picture, setPicture] = useState({});
  const [gallery, setGallery] = useState([]);
  const [image, setImage] = useState({});
  let myInput = {};

  useEffect(() => {
    imageService.getAll().then((result) => {
      console.log(result);
      console.log(result[0]);
      setGallery(result);
    });
  }, []);

  function upload(file) {
    console.log(file);
    imageService.create(file);
  }
  const handleChange = (event) => {
    setImage(URL.createObjectURL(event.target.files[0]));
    upload(event.target.files[0]);
  };

  const openAddPicture = (event) => {
    setOpenAdd(true);
  };

  const handleSubmit = async (submit) => {
    setOpenAdd(false);
    if (submit) {
    }
  };

  const handleClick = () => {
    myInput.click();
  };
  return (
    <div className={classes.root}>
      <input
        id="myInput"
        type="file"
        accept="image/*"
        ref={(ref) => (myInput = ref)}
        style={{ display: "none" }}
        onChange={handleChange}
      />
      <GridList cellHeight={250} className={classes.gridList} cols={3}>
        {gallery.map((image) => (
          <GridListTile key={image.asset_id} cols={image.cols || 3}>
            <img src={image.url} alt={image.title} />
          </GridListTile>
        ))}
      </GridList>
      <FloatingActionButtonSize
        buttonText={"Uusi kuva"}
        action={handleClick}
      ></FloatingActionButtonSize>
      {/* <AddPicture
        openAdd={openAdd}
        handleSubmit={handleSubmit}
        handleChange={({ target }) => setPicture(target.value)}
        picture={picture}
      ></AddPicture> */}
    </div>
  );
};

export default Pictures;

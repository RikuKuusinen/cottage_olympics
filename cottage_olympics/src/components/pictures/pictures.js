import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import FloatingActionButtonSize from "../floating-button";
import AddPicture from "./add-picture";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
}));

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 
 */
const Pictures = () => {
  const classes = useStyles();
  const [openAdd, setOpenAdd] = useState(false);
  const [picture, setPicture] = useState({});

  const openAddPicture = (event) => {
    setOpenAdd(true);
  };

  const handleSubmit = async (submit) => {
    setOpenAdd(false);
    if (submit) {
    }
  };
  const tileData = [
    {
      img: "test",
      title: "Image",
      author: "author",
      cols: 2,
    },
  ];
  return (
    <div className={classes.root}>
      <GridList cellHeight={160} className={classes.gridList} cols={3}>
        {tileData.map((tile) => (
          <GridListTile key={tile.img} cols={tile.cols || 1}>
            <img src={tile.img} alt={tile.title} />
          </GridListTile>
        ))}
      </GridList>
      <FloatingActionButtonSize
        buttonText={"Uusi kuva"}
        action={openAddPicture}
      ></FloatingActionButtonSize>
      <AddPicture
        openAdd={openAdd}
        handleSubmit={handleSubmit}
        handleChange={({ target }) => setPicture(target.value)}
        picture={picture}
      ></AddPicture>
    </div>
  );
};

export default Pictures;

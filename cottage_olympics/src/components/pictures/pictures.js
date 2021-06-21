import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import FloatingActionButtonSize from "../floating-button";
import imageService from "../../services/imageService";
import {
  AdvancedImage,
  lazyload,
  accessibility,
  responsive,
  placeholder,
} from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/base";

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
  tile: {
    height: "100% !important",
  },
}));

const Pictures = () => {
  const classes = useStyles();
  const [openAdd, setOpenAdd] = useState(false);
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

  async function upload(file) {
    console.log(file);
    var result = await imageService.create(file);
    console.log(result);
    setGallery([result[0], ...gallery]);
  }
  const handleChange = (event) => {
    setImage(URL.createObjectURL(event.target.files[0]));
    upload(event.target.files[0]);
  };

  const openAddPicture = (event) => {
    setOpenAdd(true);
  };
  const myCld = new Cloudinary({
    cloud: {
      cloudName: "dfwycqmju",
    },
  });

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
      <GridList className={classes.gridList} cols={3}>
        {gallery.map((image) => (
          <GridListTile
            className={classes.tile}
            key={image.asset_id}
            cols={image.cols || 3}
            height={image.height}
          >
            <AdvancedImage
              cldImg={myCld.image(image.public_id)}
              plugins={[lazyload(), responsive()]}
            />
          </GridListTile>
        ))}
      </GridList>
      <FloatingActionButtonSize
        buttonText={"Uusi kuva"}
        action={handleClick}
      ></FloatingActionButtonSize>
    </div>
  );
};

export default Pictures;

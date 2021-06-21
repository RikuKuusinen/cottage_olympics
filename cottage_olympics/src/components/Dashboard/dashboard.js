import { Box, makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";
import podium from "../../images/podium.png";
import imageService from "../../services/imageService";
import scoreService from "../../services/scoreService";
import usersService from "../../services/usersService";
import { calculatePoints } from "../functions";
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
    flexGrow: 1,
    maxWidth: "100%",
  },
  header: {
    textAlign: "center",
  },
  players1: {
    position: "fixed",
    marginTop: "1.8rem",
    left: "4.25rem",
  },
  players2: {
    position: "fixed",
    marginTop: "0rem",
    left: "42%",
    right: 0,
  },
  players3: {
    position: "fixed",
    marginTop: "3rem",
    right: "4rem",
  },
  playerswrapper: {
    fontWeight: 700,
  },
  karuselli: {
    height: "15rem",
  },
}));

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [gallery, setGallery] = useState([]);

  const classes = useStyles();

  useEffect(() => {
    getEverything();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    imageService.get3Random().then((result) => {
      console.log(result);
      console.log(result[0]);
      setGallery(result);
    });
  }, []);

  const myCld = new Cloudinary({
    cloud: {
      cloudName: "dfwycqmju",
    },
  });
  async function getEverything() {
    var loadedUsers = await usersService.getAll();
    var loadedScores = await scoreService.getAll();
    calculatePoints(loadedScores, loadedUsers);
    if (loadedUsers && loadedUsers.length > 0) {
      var orderedUsers = loadedUsers.sort((a, b) =>
        a.totalPoints ? a.totalPoints - b.totalPoints : -1
      );
      orderedUsers = orderedUsers.reverse().slice(0, 3);
      console.log(orderedUsers);
      [orderedUsers[0], orderedUsers[1]] = [orderedUsers[1], orderedUsers[0]];

      setUsers(orderedUsers);
    }
  }
  return (
    <div>
      <h2 className={classes.header}>Top 3 kymppiä</h2>
      <Box>
        {users.length > 0 ? (
          <div>
            <div className={classes.playerswrapper}>
              <div className={classes.players1}>
                {users[0].UserName} ({users[0].totalPoints})
              </div>
              <div className={classes.players2}>
                {users[1].UserName} ({users[1].totalPoints})
              </div>
              <div className={classes.players3}>
                {users[2].UserName} ({users[2].totalPoints})
              </div>
            </div>
            <img alt="Heh" src={podium} className={classes.root} />
          </div>
        ) : (
          <div>Ei tilastoja</div>
        )}
      </Box>
      <h2 className={classes.header}>Satunnainen kuva</h2>
      <Carousel showArrows={true} showThumbs={false}>
        {gallery.map((image) => (
          <div className={classes.karuselli} key={image.asset_id}>
            <AdvancedImage
              cldImg={myCld.image(image.public_id)}
              plugins={[lazyload(), responsive()]}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Dashboard;

import React from "react";
import PropTypes from "prop-types";
import { Image } from "@material-ui/icons";
import laituri from "../../images/downbythelaituri.jpg";
import { Paper } from "material-ui";

const AppBarImage = (props) => {
  console.log(props);
  return (
    <div>
      <img src={laituri} className={props.className} />
    </div>
  );
};

AppBarImage.prototype = {
  username: "",
  className: "",
};

export default AppBarImage;

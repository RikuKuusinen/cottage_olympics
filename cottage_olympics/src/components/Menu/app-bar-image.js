import React from "react";
import laituri from "../../images/downbythelaituri.jpg";

const AppBarImage = (props) => {
  return (
    <div>
      <img alt="Heh" src={laituri} className={props.className} />
    </div>
  );
};

AppBarImage.prototype = {
  username: "",
  className: "",
};

export default AppBarImage;

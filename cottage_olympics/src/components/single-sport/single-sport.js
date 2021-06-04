import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

const SingleSport = (props) => {
  const { id } = useParams();
  console.log(id);
  return <h2>Yksittäinen laji</h2>;
};

export default SingleSport;

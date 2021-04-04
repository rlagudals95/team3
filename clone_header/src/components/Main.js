import React, { Fragment, useState } from "react";
import { Grid2, Image2, Text2 } from "../elements";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import Header from "./Header";

import axios from "axios";
import Post from "./Post";

const Main = (props) => {
  const [is_like, setIs_like] = useState(false);

  axios
    .get("http://13.125.39.34/insta/main")
    .then((Response) => {
      console.log(Response.data.ret);
    })
    .catch((Error) => {
      console.log(Error);
    });

  return (
    <Fragment>
      <Header />
      <Post />
    </Fragment>
  );
};

export default Main;

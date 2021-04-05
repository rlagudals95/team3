import React, { Fragment, useEffect, useState } from "react";
import Image2 from "../elements/Image2";
import Grid2 from "../elements/Grid2";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import Header from "./Header";
import { actionCreators as postActions } from "../redux/modules/post";

import axios from "axios";
import Post from "./Post";
import { useDispatch, useSelector } from "react-redux";

const Main = (props) => {
  const [is_like, setIs_like] = useState(false);
  const post_list = useSelector((state) => state.post.list);
  const dispatch = useDispatch();
  // console.log(post_list)

  // axios
  //   .get("https://606aaf9be1c2a10017545cef.mockapi.io/mock/v1/post")
  //   .then((Response) => {
  //     console.log(Response.data);
  //     Response.data.forEach((doc))
  //   })
  //   .catch((Error) => {
  //     console.log(Error);
  //   });

  useEffect(() => {
    dispatch(postActions.getPostDB());
  }, []);

  const Section = styled.div`
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    flex-flow: row nowrap;
    max-width: 935px;
    position: relative;
    width: 100%;
    flex-grow: 1;
    margin: 0 auto;
    padding-top: 30px;
  `;

  const Leftmain = styled.div`
    float: left;
    margin-right: 28px;
    max-width: 614px;
    width: 100%;
    align-items: stretch;
    border: 0 solid #000;
    box-sizing: border-box;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    flex-shrink: 0;
    padding: 0;
    position: relative;
  `;

  const Rightmain = styled.div`
    width: 100%;
    height: 100vh;
    box-sizing: border-box;
    padding: 0;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    border: 0 solid #000;
    max-width: 293px;
  `;

  const Rightbottom = styled.div`
    padding-bottom: 38px;
    width: 100%;
    height: 100%;
  `;

  const Nav = styled.div`
    margin-bottom: 3px;
    width: 100%;
    height: 100%;
  `;

  return (
    <Fragment>
      <Header />
      <Grid2 height="54px" />
      <Grid2 bg="rgba(var(--b3f,250,250,250),1)">
        <Section>
          <Leftmain>
            <Post />
            {/* <Story>
              <Instory></Instory>
            </Story> */}
            {post_list.map((p, idx) => {
              return <Post {...p} />;
            })}
          </Leftmain>
          <Rightmain>
            <Rightbottom>
              <Nav>{/* <Navtxt>소개</Navtxt> */}</Nav>
            </Rightbottom>
          </Rightmain>
        </Section>
      </Grid2>
    </Fragment>
  );
};

export default Main;

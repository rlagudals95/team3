import React, { Fragment, useEffect } from "react";
import Grid2 from "../elements/Grid2";
import styled from "styled-components";
import Header from "../components/Header";
import { actionCreators as postActions } from "../redux/modules/post";
import Post from "./Post";
import { useDispatch, useSelector } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component"
import Spinner from "./Spinner";

const Main = (props) => {
  // const [is_like, setIs_like] = React.useState(false);
  const post_list = useSelector((state) => state.post.list);
  const dispatch = useDispatch();
  const paging = useSelector((state) => state.post.paging);
  const loading = useSelector((state) => state.post.is_loading);

  useEffect(() => {
    dispatch(postActions.getPostDB(paging.start, paging.size));
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

  const test = () => {
    dispatch(postActions.getPostDB(paging.start, paging.size))
  }

  return (
    <Fragment>
      {loading ? (<Spinner />)
        : (
          <>
            <Header />
            <Grid2 height="54px" />
            <Grid2 bg="rgba(var(--b3f,250,250,250),1)">
              <Section>
                <Leftmain>
                  <InfiniteScroll
                    dataLength={post_list.length}
                    next={test}
                    hasMore={true}
                  // loader={<><ReactLoading type={type} color={color} height={'80%'} width={'80%'} /></>}
                  >
                    {post_list.map((p, idx) => {
                      return <Post {...p} />;
                    })}

                  </InfiniteScroll>
                </Leftmain>
                <Rightmain>
                  <Rightbottom>
                    <Nav>{/* <Navtxt>소개</Navtxt> */}</Nav>
                  </Rightbottom>
                </Rightmain>
              </Section>
            </Grid2>
          </>
        )}
    </Fragment>
  );
};

export default Main;

import React, { useState } from "react";
import Header from "./components/Header";

import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "./redux/configureStore";
import Login from "./pages/Login";
import Test from "./components/Test";
import Test2 from "./components/Test2";
import styled from "styled-components";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import Main from "./pages/Main";
import { Fragment } from "react";
import Grid2 from "./elements/Grid2";
import PostWrite from "./pages/PostWrite";
import { Button } from "./elements";
import { useDispatch } from "react-redux";
import { actionsCreators as userActions } from "./redux/modules/user";

const App = () => {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");

  // const [token, setToken] = useState("");

  const is_local = token ? true : false; //상태관리
  React.useEffect(() => {
    dispatch(userActions.loginCheck(is_local, token)); //렌더링 마다 로그인체크
  });

  if (token && history.location.pathname === "/login") {
    //토큰이 있지만 로그인 페이지다?
    history.push("/");
  } // 로그인이 되어있지만

  return (
    <React.Fragment>
      <ConnectedRouter history={history}>
        {/* <Route path="/" exact component={PostList} /> */}
        <Route exact path="/login" exact component={Login} />
        <Route exact path="/header" exact component={Header} />
        <Route exact path="/test" exact component={Test} />
        <Route exact path="/signup" exact component={Signup} />
        <Route exact path="/test2" exact component={Test2} />
        <Route exact path="/profile" exact component={Profile} />
        <Route exact path="/postwrite" exact component={PostWrite} />
        <Route path="/" exact component={Main} />
      </ConnectedRouter>

      <Button
        is_float
        text="+"
        _onClick={() => {
          history.push("/postwrite");
        }}
      ></Button>
    </React.Fragment>
  );
};

export default App;

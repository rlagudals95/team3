import React from "react";
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
import Main from "./components/Main";
import { Fragment } from "react";
import Grid2 from "./elements/Grid2";
import PostWrite from "./pages/PostWrite";
import { Button } from "./elements";

const App = () => {
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

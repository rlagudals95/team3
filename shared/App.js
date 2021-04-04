import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
// import { ConnectedRouter } from "connected-react-router";
import { Fragment } from 'react';
import { Grid } from "../elements"
import Main from "../components/Main"

function App() {
  return (
    <Fragment>
      <Grid>
        <BrowserRouter>
          <Route path="/" exact component={Main} />
        </BrowserRouter>
      </Grid>
    </Fragment>
  );
}

export default App;

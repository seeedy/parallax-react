import React from "react";
import TopBar from "./TopBar";
import { Router, Route } from "react-router-dom";
import { createBrowserHistory as createHistory } from "history";
import HomePage from "./HomePage";

require('dotenv').config();

const history = createHistory();

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <TopBar />
        <Route path="/" exact component={HomePage} />
      </Router>
    </div>
  );
}

export default App;

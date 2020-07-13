import React, { Component } from "react";
import Header from "./Header/Header";
import SearchBar from "./SearchBar/SearchBar";
//import DefData from "../components/Data/defData";
import { Router, Route, Switch } from "react-router-dom";
import TotalData from "./Data/TotalData";
import DefData from "../components/Data/mainContainer/Definition/defData";
import ExData from "../components/Data/mainContainer/Examples/exData";
import EtymoData from "../components/Data/mainContainer/Etymologies/etymoData";
import history from "../history";
import Error from "./Error";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Router history={history}>
          <div className="app-container">
            <Header />
            <SearchBar />
          </div>
          <Route path={"/eRrOrXxX"} exact component={Error} />
          <Switch>
            <Route path="/Dictionary/:word" component={TotalData} />
          </Switch>
          <Route path={"/Dictionary/:word/definitions"} component={DefData} />
          <Route path={"/Dictionary/:word/examples"} component={ExData} />
          <Route path={"/Dictionary/:word/etymologies"} component={EtymoData} />
        </Router>
      </div>
    );
  }
}

export default App;

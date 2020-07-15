import React, { Component } from "react";
import Header from "./Header/Header";
import SearchBar from "./SearchBar/SearchBar";
import { Router, Route, Switch } from "react-router-dom";
import TotalData from "./Data/TotalData";
import DefData from "../components/Data/mainContainer/Definition/defData";
import ExData from "../components/Data/mainContainer/Examples/exData";
import EtymoData from "../components/Data/mainContainer/Etymologies/etymoData";
import PronunData from "../components/Data/mainContainer/Pronunciations/pronunData";
import history from "../history";
import Error from "./Error";
import "./App.css";

const LineLoader = () => {
  return <div className="lineloader"></div>;
};
class App extends Component {
  render() {
    if (window.performance.navigation.type == 1) {
      history.push("/Dictionary");
    }
    return (
      <div className="container">
        <Router history={history}>
          <div className="app-container">
            <Header />
            <SearchBar />
          </div>
          <Route path={"/loading"} exact component={LineLoader} />
          <Route path={"/eRrOrXxX"} exact component={Error} />
          <Switch>
            <Route path="/Dictionary/:word" component={TotalData} />
          </Switch>
          <Route path={"/Dictionary/:word/definitions"} component={DefData} />
          <Route path={"/Dictionary/:word/examples"} component={ExData} />
          <Route path={"/Dictionary/:word/etymologies"} component={EtymoData} />
          <Route
            path={"/Dictionary/:word/pronunciations"}
            component={PronunData}
          />
        </Router>
      </div>
    );
  }
}

export default App;

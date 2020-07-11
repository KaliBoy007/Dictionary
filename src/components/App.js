import React, { Component } from "react";
import Header from "./Header/Header";
import SearchBar from "./SearchBar/SearchBar";
import DefData from "../components/Data/defData";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <BrowserRouter>
          <>
            <Header />
            <SearchBar />
            <Route path="/:word" exact component={DefData} />
          </>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

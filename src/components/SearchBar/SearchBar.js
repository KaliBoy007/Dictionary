import React, { Component } from "react";
import "./SearchBar.css";
import { connect } from "react-redux";
import { getDefinitions } from "../../actions";
import { Link } from "react-router-dom";
class SearchBar extends Component {
  state = { word: null };
  onFormSubmit = (event) => {
    event.preventDefault();
    if (!this.state.word) {
      alert("enter any text!");
      return;
    } else {
      this.setState({ word: "" });
      this.mainForm.reset();
      this.props.getDefinitions(this.state.word);
    }
  };
  options = ["Definitions", "Pronunciations", "Examples"];
  defaultOption = this.options[0];
  render() {
    return (
      <div className="sbmain">
        <form
          ref={(element) => (this.mainForm = element)}
          className="sb-container"
          onSubmit={this.onFormSubmit}
        >
          <div className="sb-form">
            <input
              id="maininput"
              type="text"
              autoComplete="off"
              className="sb-input"
              onChange={(event) => {
                this.setState({ word: event.target.value });
              }}
              required
            />
            <label className="sb-label-name">
              <span className="sb-content-name">Enter any word here!</span>
            </label>
          </div>

          <div className="linkwrapper">
            <Link
              to={`/Dictionary/${this.state.word}`}
              className="sb-button button"
              onClick={this.onFormSubmit}
            >
              Search!
            </Link>
          </div>
        </form>

        <br />
      </div>
    );
  }
}

export default connect(null, { getDefinitions })(SearchBar);

import React, { Component } from "react";
import "./SearchBar.css";
import { connect } from "react-redux";
import { getDefinitions } from "../../actions";
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
  render() {
    return (
      <>
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
          <a
            type="submit"
            href="/"
            className="sb-button button"
            onClick={this.onFormSubmit}
          >
            Search!
          </a>
        </form>
        <br />
      </>
    );
  }
}

export default connect(null, { getDefinitions })(SearchBar);

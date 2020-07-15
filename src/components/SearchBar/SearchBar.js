import React, { Component } from "react";
import "./SearchBar.css";
import { connect } from "react-redux";
import { getDefinitions } from "../../actions";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
class SearchBar extends Component {
  componentDidMount() {
    AOS.init({
      duration: 1000,
    });
  }
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
          <div className="sb-form" data-aos="zoom-in">
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

          <div className="linkwrapper" data-aos="fade-up">
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

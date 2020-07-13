import React, { Component } from "react";
import "./asideContainer.css";
import { Link } from "react-router-dom";

class AsideContainer extends Component {
  render() {
    return (
      <aside>
        <ul>
          <li>
            <Link to={`/Dictionary/${this.props.word}/definitions`}>
              Definitions
            </Link>
          </li>
          <li>
            <Link to={`/Dictionary/${this.props.word}/examples`}>Examples</Link>
          </li>
          <li>
            <Link to={`/Dictionary/${this.props.word}/etymologies`}>
              Etymologies
            </Link>
          </li>
          <li>Pronunciations</li>
        </ul>
        <div className="instruct">Click any one of 'em!!</div>
      </aside>
    );
  }
}

export default AsideContainer;

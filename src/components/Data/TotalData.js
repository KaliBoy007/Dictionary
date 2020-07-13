import React, { Component } from "react";
import AsideContainer from "./asideContainer/asideContainer";
import "./TotalData.css";

class TotalData extends Component {
  render() {
    return (
      <div className="totalcontainer">
        <div className="totaldatacontainer">
          <AsideContainer
            word={this.props.match ? this.props.match.params.word : ""}
            clcont={this.clcontainer}
          />
        </div>
      </div>
    );
  }
}

export default TotalData;

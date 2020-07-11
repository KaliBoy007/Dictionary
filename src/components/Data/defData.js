import React, { Component } from "react";
import { connect } from "react-redux";
//import Definitions from "./definitions";
import "./dedata.css";

class DefData extends Component {
  result = [];
  resultid = [];
  nestRemover = (def) => {
    if (def) {
      if (Array.isArray(def)) {
        def.forEach(this.nestRemover);
      } else if (typeof def === "object") {
        Object.keys(def).forEach((key) => {
          if (key === "subsenses") {
            return;
          }
          if (key === "definitions") {
            this.result.push(def[key]);
          } else {
            this.nestRemover(def[key]);
          }
        });
      }
    }
  };
  // ex = (def) => {
  //   let ddef = def;
  //   while (ddef) {
  //     if (Array.isArray(ddef)) {
  //       let exd = [];
  //       ddef.forEach((element) => {
  //         exd.push(element);
  //       });
  //       ddef = [];
  //       ddef = exd;
  //     } else if (typeof ddef === "object") {
  //       Object.keys(ddef).forEach((key) => {
  //         if (key === "subsenses") {
  //           return;
  //         }
  //         if (key === "definitions") {
  //           this.result.push(ddef[key]);
  //           return;
  //         } else {
  //           ddef = ddef[key];
  //         }
  //       });
  //     }
  //   }
  // };

  nestRemoverId = (def) => {
    if (def) {
      if (Array.isArray(def)) {
        def.forEach(this.nestRemoverId);
      } else if (typeof def === "object") {
        Object.keys(def).forEach((key) => {
          if (key === "id") {
            this.resultid.push(def[key]);
          } else {
            this.nestRemoverId(def[key]);
          }
        });
      }
    }
  };

  Definitions = (data, keyid) => {
    if (data) {
      let i = 0;
      return data.map((definition) => {
        return definition.map((sentence) => {
          return (
            <div className="td-wrapper" key={keyid[i++]}>
              <div className="td-container">{sentence}.</div>
              <br />
            </div>
          );
        });
      });
    } else {
      return <div className="td-container">Sorry! No Match!</div>;
    }
  };

  render() {
    this.nestRemover(this.props.definitions);
    this.nestRemoverId(this.props.definitions);
    console.log(this.props.definitions);
    if (this.props.definitions) {
      return (
        <div className="def-container">
          {this.Definitions(this.result, this.resultid)}
          {/* <Definitions data={this.result} keyid={this.resultid} /> */}
        </div>
      );
    } else {
      return <div className="def-container">Sorry! No match Found!</div>;
    }
  }
}

const mapStateToProps = (state) => {
  return { definitions: state.definitions };
};
export default connect(mapStateToProps)(DefData);

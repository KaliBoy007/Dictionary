import React, { Component } from "react";
import { connect } from "react-redux";
import "../Definition/dedata.css";
import Examples from "./examples";
import AOS from "aos";
import "aos/dist/aos.css";

class ExData extends Component {
  componentDidMount() {
    AOS.init({
      duration: 1000,
    });
  }
  result = [];
  resultid = [];
  nestRemover = (def) => {
    if (def) {
      if (Array.isArray(def)) {
        def.forEach(this.nestRemover);
      } else if (typeof def === "object") {
        Object.keys(def).forEach((key) => {
          if (key === "text") {
            if (
              def[key] !== "Noun" &&
              def[key] !== "Verb" &&
              def[key] !== "Interjection" &&
              def[key] !== "Conjunction" &&
              def[key] != "Pronounn" &&
              def[key] != "Adverb"
            ) {
              this.result.push(def[key]);
            }
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
  modifiedResult = (result) => {
    this.result = [...new Set(result)];
  };
  render() {
    this.result = [];
    this.resultid = [];
    this.nestRemover(this.props.definitions);
    this.nestRemoverId(this.props.definitions);
    this.modifiedResult(this.result);
    if (this.result.length > 0) {
      return (
        <div className="def-container" data-aos="fade-right">
          <Examples data={this.result} keyid={this.resultid} />
        </div>
      );
    } else {
      return (
        <div className="ntg-container" data-aos="fade-up">
          😕Nothing to show here.Search anything different or reload the page!😕
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return { definitions: state.definitions };
};
export default connect(mapStateToProps)(ExData);

import React, { Component } from "react";
import { connect } from "react-redux";
import ReactAudioPlayer from "react-audio-player";
import "./pronun.css";
import AOS from "aos";
import "aos/dist/aos.css";

class PronunData extends Component {
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
          if (key === "audioFile") {
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
  modifiedResult = (result) => {
    this.result = [...new Set(result)];
  };
  render() {
    this.result = [];
    this.resultid = [];
    this.nestRemover(this.props.definitions);
    this.nestRemoverId(this.props.definitions);
    this.modifiedResult(this.result);
    console.log(this.result);
    if (this.result.length > 0) {
      return (
        <div className="def-container" data-aos="fade-right">
          <div className="pronun-wrapper">
            <ReactAudioPlayer
              src={this.result[0]}
              controls
              className="pronun-container"
            />
          </div>
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
export default connect(mapStateToProps)(PronunData);

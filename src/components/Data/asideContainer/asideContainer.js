import React, { Component } from "react";
import "./asideContainer.css";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

class AsideContainer extends Component {
  componentDidMount = () => {
    AOS.init({
      duration: 1000,
    });
  };
  render() {
    return (
      <aside>
        <ul>
          <li data-aos="fade-left" data-aos-delay="300">
            <Link to={`/Dictionary/${this.props.word}/definitions`}>
              Definitions
            </Link>
          </li>
          <li data-aos="fade-left" data-aos-delay="400">
            <Link to={`/Dictionary/${this.props.word}/examples`}>Examples</Link>
          </li>
          <li data-aos="fade-left" data-aos-delay="500">
            <Link to={`/Dictionary/${this.props.word}/etymologies`}>
              Etymologies
            </Link>
          </li>
          <li data-aos="fade-left" data-aos-delay="600">
            <Link to={`/Dictionary/${this.props.word}/pronunciations`}>
              Pronunciations
            </Link>
          </li>
        </ul>
        <div className="instruct" data-aos="fade-up" data-aos-delay="650">
          Click any one of 'em!
        </div>
      </aside>
    );
  }
}

export default AsideContainer;

import "./Header.css";
import React, { Component } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

class Header extends Component {
  componentDidMount() {
    AOS.init({
      duration: 1000,
    });
  }
  render() {
    return (
      <h1 className="header-container" data-aos="fade-down">
        THE ENCYCLOPEDIA OF WORDS
      </h1>
    );
  }
}

export default Header;

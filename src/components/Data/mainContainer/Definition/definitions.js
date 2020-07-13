import React from "react";

const Definitions = ({ data, keyid }) => {
  if (data) {
    let i = 0;
    return data.map((definition) => {
      return definition.map((sentence) => {
        return (
          <div className="td-wrapper" key={keyid[i++]}>
            <div className="td-container">{sentence}.</div>{" "}
          </div>
        );
      });
    });
  }
};

export default Definitions;

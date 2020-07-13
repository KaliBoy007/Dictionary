import React from "react";

const Examples = ({ data, keyid }) => {
  if (data) {
    let i = 0;
    return data.map((example) => {
      return (
        <div className="td-wrapper" key={keyid[i++]}>
          <div className="td-container">{example}.</div>
        </div>
      );
    });
  }
};

export default Examples;

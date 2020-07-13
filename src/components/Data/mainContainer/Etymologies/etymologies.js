import React from "react";

const Etymologies = ({ data, keyid }) => {
  if (data) {
    let i = 0;
    return data.map((etymology) => {
      return (
        <div className="td-wrapper" key={keyid[i++]}>
          <div className="td-container">{etymology}.</div>{" "}
        </div>
      );
    });
  }
};

export default Etymologies;

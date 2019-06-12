import React from "react";

const Enemy = ({ x, y, letter }) => {
  const style = {
    position: "absolute",
    top: y,
    left: x
  };
  return <div style={style}>{letter}</div>;
};

export default Enemy;

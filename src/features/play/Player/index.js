import React, { useState } from "react";
import * as directions from "../../../constants/directions";
import kitty from "../../../img/kitty.gif";

const move = (coordinates, direction) => {
  switch (direction) {
    case directions.UP:
      return { ...coordinates, y: (coordinates.y -= 1) };
    case directions.DOWN:
      return { ...coordinates, y: (coordinates.y += 1) };
    case directions.LEFT:
      return { ...coordinates, x: (coordinates.x -= 1) };
    case directions.RIGHT:
      return { ...coordinates, x: (coordinates.x += 1) };
    default:
      break;
  }
};

const Player = ({ x, y, newDirection, detectCollision }) => {
  const [coordinates, setCoordinates] = useState({ x, y });
  detectCollision(coordinates);
  let timer = null;

  if (timer) {
    clearTimeout(timer);
    timer = setTimeout(function() {
      let newCoordinates = move(coordinates, newDirection);
      setCoordinates(newCoordinates);
    }, 5);
  } else {
    timer = setTimeout(function() {
      let newCoordinates = move(coordinates, newDirection);
      setCoordinates(newCoordinates);
    }, 5);
  }

  const style = {
    position: "absolute",
    top: coordinates.y,
    left: coordinates.x
  };
  return <img width="50" src={kitty} style={style} alt="kitty" />;
};

export default Player;

import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import Player from "../Player";
import * as directions from "../../../constants/directions";
import Enemy from "../Enemy";
import YouWonScreen from "../YouWonScreen";

const translateSwipeDirection = direction => {
  switch (direction) {
    case "Right":
      return directions.RIGHT;
    case "Left":
      return directions.LEFT;
    case "Down":
      return directions.DOWN;
    case "Up":
      return directions.UP;
    default:
      return;
  }
};

const getRandomInt = () => {
  return Math.floor(Math.random() * Math.floor(300));
};

const generateEnemies = () => {
  const message = [
    "F",
    "e",
    "l",
    "i",
    "z",
    "C",
    "u",
    "m",
    "p",
    "l",
    "e",
    "a",
    "ñ",
    "o",
    "s"
  ];
  return message.slice().map(letter => {
    return {
      x: getRandomInt(),
      y: getRandomInt(),
      letter: message.shift()
    };
  });
};

const enemies = generateEnemies();

let enemy = enemies.shift();

const Board = () => {
  const [direction, setDirection] = useState(directions.UP);
  const [gameFinished, setGameFinished] = useState(false);

  const detectCollision = player => {
    if (
      player.x >= enemy.x - 50 &&
      player.x <= enemy.x + 10 &&
      player.y >= enemy.y - 50 &&
      player.y <= enemy.y + 10
    ) {
      if (enemies.length > 0) {
        enemy = enemies.shift();
      } else {
        setGameFinished(true);
      }
    }
  };

  const handlers = useSwipeable({
    onSwiped: eventData => {
      setDirection(translateSwipeDirection(eventData.dir));
    }
  });
  return (
    <div
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        backgroundColor: "#ffbccf",
        color: "white"
      }}
      className="Board"
      {...handlers}
    >
      {gameFinished && <YouWonScreen />}
      {!gameFinished && (
        <div>
          <Enemy {...enemy} />
          <Player
            x={50}
            y={500}
            newDirection={direction}
            detectCollision={detectCollision}
          />
        </div>
      )}
    </div>
  );
};

export default Board;

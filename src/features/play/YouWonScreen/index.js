import React from "react";
import styles from "./style.module.css";
import Keanu from "../../../img/keanu.gif";

const YouWonScreen = () => {
  return (
    <div className={styles.background}>
      <h1>Feliz Cumpleaños Laurini!!!!</h1>
      <img width="300" src={Keanu} alt="Keanu bebe" />
      <h3>
        Ya estas viejita, como keanu {"\u2728"}
        {"<3"}
      </h3>
    </div>
  );
};

export default YouWonScreen;

import React from "react";
import styles from "./Results.module.css";
const Results = () => {
  const image = require("../../misc/img/pasta.jpg").default;

  return (
    <ul className={styles.results}>
      {/* <p className={styles.resultsMsg}>Search now! :)</p> */}
      <li>
        <a className={styles.resultsBox}>
          <figure className={styles.resultsFig}>
            <img className={styles.resultsImg} src={image} alt="" />
          </figure>
          <div className={styles.resultsInfo}>
            <p className={styles.resultsTitle}>Best pizza in da town</p>
            <span className={styles.resultsCook}>Nigger Planet</span>
          </div>
        </a>
      </li>
    </ul>
  );
};

export default Results;

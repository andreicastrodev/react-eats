import React from "react";
import { useSelector } from "react-redux";
import styles from "./Results.module.css";
const Results = () => {
  const image = require("../../misc/img/pasta.jpg").default;
  const data = useSelector((state) => state.recipe.items.payload);
  console.log(data)

  return (
    <ul className={styles.results}>

      <li>

        {data === undefined ? <p className={styles.resultsMsg}>Search now! :)</p> :

          data.recipes.map(recipe => (
            <a className={styles.resultsBox} key={recipe.recipe_id}>
              <figure className={styles.resultsFig}>
                <img className={styles.resultsImg} src={recipe.image_url} alt="" />
              </figure>
              <div className={styles.resultsInfo}>
                <p className={styles.resultsTitle}>{recipe.title.substring(0,20) + "..."}</p>
                <span className={styles.resultsCook}>{recipe.publisher}</span>
              </div>
            </a>
          ))
        }




      </li>
    </ul>
  );
};

export default Results;

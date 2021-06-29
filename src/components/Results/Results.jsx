import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import Spinner from "../UI/Spinner";
import styles from "./Results.module.css";
const Results = () => {
  const data = useSelector((state) => state.recipe.items.payload);
  const load = useSelector((state) => state.loading.resultsLoading.payload);
  console.log(data);
  console.log(load);
  return (
    <ul className={styles.results}>
      {load ? (
        <Spinner />
      ) : (
        <li>
          {data === undefined
            ? null
            : data.recipes.map((recipe) => (
                <a
                  className={styles.resultsBox}
                  key={recipe.recipe_id}
                  id={recipe.recipe_id}
                  href={`#${recipe.recipe_id}`}
                >
                  <figure className={styles.resultsFig}>
                    <img
                      className={styles.resultsImg}
                      src={recipe.image_url}
                      alt=""
                    />
                  </figure>
                  <div className={styles.resultsInfo}>
                    <p className={styles.resultsTitle}>
                      {recipe.title.substring(0, 20) + "..."}
                    </p>
                    <span className={styles.resultsCook}>
                      {recipe.publisher}
                    </span>
                  </div>
                </a>
              ))}
        </li>
      )}
    </ul>
  );
};

export default Results;

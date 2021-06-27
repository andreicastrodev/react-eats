import React from "react";
import { ReactComponent as TimeToCook } from "../../misc/svg/time.svg";
import { ReactComponent as ServingToCook } from "../../misc/svg/serving.svg";

import styles from "./Recipe.module.css";
const Recipe = () => {
  const image = require("../../misc/img/pasta.jpg").default;

  return (
    <div className={styles.recipe}>
      <img className={styles.recipeImg} src={image} alt="" />
      <div className={styles.recipeTitleBlock}>
        <h2 className={styles.recipeTitle}>Best Pizza in the hood Nigga</h2>
      </div>
      <div className={styles.recipeCookInfo}>
        <div className={styles.recipeTime}>
          <TimeToCook className={styles.recipeTimeSvg} />
          <span>75 Minutes</span>
        </div>
        <div className={styles.recipeServing}>
          <ServingToCook className={styles.recipeServingSvg} />
          <span>4 Servings</span>
        </div>
      </div>

      <div className={styles.recipeIngredients}>
        <ul className={styles.recipeIngredientsList}>
          <li className={styles.recipeList}>
            <div className={styles.recipeCount}>1000</div>
            <div className={styles.recipeIngredient}>
              <span className={styles.recipeUnit}>g</span>
              pasta
            </div>
          </li>
          <li className={styles.recipeList}>
            <div className={styles.recipeCount}>1000</div>
            <div className={styles.recipeIngredient}>
              <span className={styles.recipeUnit}>g</span>
              pasta
            </div>
          </li>
          <li className={styles.recipeList}>
            <div className={styles.recipeCount}>1000</div>
            <div className={styles.recipeIngredient}>
              <span className={styles.recipeUnit}>g</span>
              pasta
            </div>
          </li>
          <li className={styles.recipeList}>
            <div className={styles.recipeCount}>1000</div>
            <div className={styles.recipeIngredient}>
              <span className={styles.recipeUnit}>g</span>
              pasta
            </div>
          </li>
          <li className={styles.recipeList}>
            <div className={styles.recipeCount}>1000</div>
            <div className={styles.recipeIngredient}>
              <span className={styles.recipeUnit}>g</span>
              pasta
            </div>
          </li>
          <li className={styles.recipeList}>
            <div className={styles.recipeCount}>1000</div>
            <div className={styles.recipeIngredient}>
              <span className={styles.recipeUnit}>g</span>
              pasta
            </div>
          </li>
        </ul>
      </div>

      <div className={styles.recipeDirections}>
        <h2 className={styles.recipeTitle1}>How to Cook It</h2>
        <p className={styles.recipeText}>
          This recipe was carefully designed and tested by Closet Cooking.
          Please check out directions at their website.
        </p>
        <button className={styles.recipeBtn}>Directions</button>
      </div>
    </div>
  );
};

export default Recipe;

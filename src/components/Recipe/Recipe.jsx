import React from "react";
import { ReactComponent as TimeToCook } from "../../misc/svg/time.svg";
import { ReactComponent as ServingToCook } from "../../misc/svg/serving.svg";

import styles from "./Recipe.module.css";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
const Recipe = ({ }) => {
  const [recipeData, setRecipeData] = useState(null);
  const { hash } = useLocation();
  console.log(hash)
  const newHash = hash.substring(1)
  useEffect(() => {

    const getRecipeData = async () => {
      try {
        const RES = await fetch(`https://forkify-api.herokuapp.com/api/get?rId=${newHash}`)
        if (!RES.ok) {
          throw new Error('Something went wrong');
        }
        const DATA = await RES.json();
        const { recipe } = DATA

        setRecipeData({
          imageUrl: recipe.image_url,
          ingredients: recipe.ingredients,
          publisher: recipe.publisher,
          publisherUrl: recipe.publisher_url,
          recipeId: recipe.recipe_id,
          socialRank: recipe.social_rank,
          sourceUrl: recipe.source_url,
          title: recipe.title
        })
      } catch (error) {
        console.error(error)
      }
    }
    getRecipeData()

  }, [newHash])


  let hasData = null;


  if (recipeData) {
    hasData =
      <div className={styles.recipe}>
        <img className={styles.recipeImg} src={recipeData.imageUrl} alt="" />
        <div className={styles.recipeTitleBlock}>
          <h2 className={styles.recipeTitle}>{recipeData.title}</h2>
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
            {
              recipeData.ingredients.map(ingridient => (
                <li className={styles.recipeList}>
                  <div className={styles.recipeIngredient}>
                    <span className={styles.recipeUnit}>{ingridient}</span>
                  </div>
                </li>

              ))
            }
          </ul>
        </div>

        <div className={styles.recipeDirections}>
          <h2 className={styles.recipeTitle1}>How to Cook It</h2>
          <p className={styles.recipeText}>
            This recipe was carefully designed and tested by {recipeData.publisher}.
            Please check out directions at their website.
          </p>
          <button className={styles.recipeBtn}>Directions</button>
        </div>
      </div>
  } else {
    hasData = <p>Search now for yummu recipes :)</p>
  }


  return (
    <React.Fragment>
      {
        hasData
      }
    </React.Fragment>

  );
};

export default Recipe;

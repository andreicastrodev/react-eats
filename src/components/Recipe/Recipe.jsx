import React from "react";
import { ReactComponent as Star } from "../../misc/svg/star.svg";
import { ReactComponent as Bookmark } from "../../misc/svg/bookmark.svg";
import { ReactComponent as BookmarkFill } from "../../misc/svg/bookmark-fill.svg";

import styles from "./Recipe.module.css";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import Spinner from "../UI/Spinner";
import { useDispatch } from "react-redux";
import { recipesActions } from "../../store/recipes-slice";
import { fetchRecipeIngridientData } from "../../store/actions";
let preventRequest = true;

const Recipe = ({}) => {
  const [recipeData, setRecipeData] = useState(null);
  const load = useSelector((state) => state.loading.loading.payload);
  const { hash } = useLocation();
  const newHash = hash.substring(1);
  const dispatch = useDispatch();

  const bookmarkedItems = useSelector((state) => state.recipe.bookmarks);
  const fetchedRecipe = useSelector((state) => state.recipe.recipe);
  const newBookmarkedItems = bookmarkedItems.map((items) => {
    return items.payload;
  });

  const bookmarkedItem = newBookmarkedItems.some(
    (item) => item.recipeId === recipeData.recipeId
  );

  useEffect(() => {
    if (preventRequest) {
      preventRequest = false;
      return;
    }
    dispatch(fetchRecipeIngridientData(newHash));

    if (fetchedRecipe === null) {
      return;
    }

    const newRecipe = fetchedRecipe.payload;
    setRecipeData({
      imageUrl: newRecipe.image_url,
      ingredients: newRecipe.ingredients,
      publisher: newRecipe.publisher,
      publisherUrl: newRecipe.publisher_url,
      recipeId: newRecipe.recipe_id,
      socialRank: newRecipe.social_rank,
      sourceUrl: newRecipe.source_url,
      title: newRecipe.title,
    });
  }, [newHash]);

  const addBookmarkHandler = () => {
    dispatch(recipesActions.addBookmark({ payload: recipeData }));
  };

  let hasData = null;

  if (recipeData) {
    hasData = (
      <div className={styles.recipe}>
        <img className={styles.recipeImg} src={recipeData.imageUrl} alt="" />
        <div className={styles.recipeTitleBlock}>
          <h2 className={styles.recipeTitle}>{recipeData.title}</h2>
        </div>
        <div className={styles.recipeCookInfo}>
          <div className={styles.recipeTime}>
            <Star className={styles.recipeTimeSvg} />
            <span>{Math.round(recipeData.socialRank)}</span>
          </div>
          <div className={styles.recipeServing}>
            <button
              className={styles.recipeBookmarkBtn}
              onClick={addBookmarkHandler}
            >
              {bookmarkedItem ? (
                <BookmarkFill className={styles.recipeServingSvg} />
              ) : (
                <Bookmark className={styles.recipeServingSvg} />
              )}
            </button>
          </div>
        </div>

        <div className={styles.recipeIngredients}>
          <ul className={styles.recipeIngredientsList}>
            {recipeData.ingredients.map((ingridient, i) => (
              <li className={styles.recipeList} key={i}>
                <div className={styles.recipeIngredient}>
                  <span className={styles.recipeUnit}>{ingridient}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.recipeDirections}>
          <h2 className={styles.recipeTitle1}>How to Cook It</h2>
          <p className={styles.recipeText}>
            This recipe was carefully designed and tested by{" "}
            {recipeData.publisher}. Please check out directions at their
            website.
          </p>
          <button className={styles.recipeBtn}>Directions</button>
        </div>
      </div>
    );
  } else {
    hasData = (
      <p className={styles.recipeMsg}>Search now for yummy recipes :)</p>
    );
  }

  return (
    <React.Fragment>
      {load ? <Spinner className={styles.recipeSpinner} /> : hasData}
    </React.Fragment>
  );
};

export default Recipe;

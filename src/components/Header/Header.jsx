import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";
import { ReactComponent as HeaderMode } from "../../misc/svg/mode.svg";
import { ReactComponent as HeaderBookmark } from "../../misc/svg/bookmark.svg";
import { useDispatch, useSelector } from "react-redux";

import { fetchRecipeItemsData } from "../../store/actions";
let stopOnStart = true;

const Header = () => {
  const [searchedItem, setSearchedItem] = useState("");
  const bookmarkedItems = useSelector((state) => state.recipe.bookmarks);

  const newBookmarkedItems = bookmarkedItems.map((items) => {
    return items.payload;
  });
  const dispatch = useDispatch();
  console.log(newBookmarkedItems);

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (stopOnStart) return;
    dispatch(fetchRecipeItemsData(searchedItem));
  };

  const searchHandler = (e) => {
    setSearchedItem(e.target.value);
    stopOnStart = false;
  };

  return (
    <div className={styles.header}>
      <h1 className={styles.headerTitle}>Eatsys</h1>
      <form onSubmit={formSubmitHandler} className={styles.headerForm}>
        <input
          value={searchedItem}
          className={styles.headerInput}
          type="text"
          placeholder="Search recipes now!"
          onChange={searchHandler}
        />
        <button className={styles.headerBtn}>Search</button>
      </form>
      <nav className={styles.headerFns}>
        <li>
          <button>
            <HeaderMode className={styles.headerMode} />
          </button>
        </li>
        <li>
          <button className={styles.heaverBookmarkBtn}>
            <HeaderBookmark className={styles.headerBookmark} />
            <span>Bookmark</span>
          </button>
          <div className={styles.headerBookmarks}>
            <ul className={styles.headerBookmarksList}>
              {newBookmarkedItems.length > 0 ? (
                <li className={styles.headerBookmarksPreview}>
                  {newBookmarkedItems.map((recipe) => (
                    <a
                      className={styles.headerPreviewLink}
                      href={`#${recipe.recipeId}`}
                      key={recipe.recipeId}
                    >
                      <figure className={styles.headerFigure}>
                        <img
                          className={styles.headerImg}
                          src={recipe.imageUrl}
                          alt=""
                        />
                      </figure>
                      <div className={styles.headerData}>
                        <h4 className={styles.headerDataTitle}>
                          {recipe.title}
                        </h4>
                        <p className={styles.headerDataPublisher}>
                          {recipe.publisher}
                        </p>
                      </div>
                    </a>
                  ))}
                </li>
              ) : (
                <p className={styles.headerRecipeMessage}>
                  Bookmark a recipe :)
                </p>
              )}
            </ul>
          </div>
        </li>
      </nav>
    </div>
  );
};

export default Header;

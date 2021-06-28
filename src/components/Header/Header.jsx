import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";
import { ReactComponent as HeaderMode } from "../../misc/svg/mode.svg";
import { ReactComponent as HeaderBookmark } from "../../misc/svg/bookmark.svg";
import { useDispatch, useSelector } from "react-redux";
import { recipesActions } from "../../store/recipes-slice";

let stopOnStart = true;

const Header = () => {

  const [searchedItem, setSearchedItem] = useState('')

  const image = require("../../misc/img/pasta.jpg").default;
  const dispatch = useDispatch()



  const formSubmitHandler = (e) => {
    e.preventDefault()
    const getData = async () => {
      try {
        const RES = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${searchedItem}`)
        console.log(RES)
        if (!RES.ok) {
          throw new Error('Something went wrong')
        }
        const data = await RES.json();
        dispatch(recipesActions.addRecipe({ payload: data }))
      } catch (error) {
        console.error(error)
      }
    }

    if (stopOnStart) return
    getData()
  }

  const searchHandler = (e) => {
    setSearchedItem(e.target.value)
    stopOnStart = false
  }


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
              <li className={styles.headerBookmarksPreview}>
                <a className={styles.headerPreviewLink} href="#">
                  <figure className={styles.headerFigure}>
                    <img className={styles.headerImg} src={image} alt="" />
                  </figure>
                  <div className={styles.headerData}>
                    <h4 className={styles.headerDataTitle}>Nigga Pizza</h4>
                    <p className={styles.headerDataPublisher}>Da Hoodz</p>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </li>
      </nav>
    </div>
  );
};

export default Header;

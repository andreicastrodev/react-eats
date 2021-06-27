import React from "react";
import styles from "./Header.module.css";
import { ReactComponent as HeaderMode } from "../../misc/svg/mode.svg";
import { ReactComponent as HeaderBookmark } from "../../misc/svg/bookmark.svg";
const Header = () => {
  const image = require("../../misc/img/pasta.jpg").default;

  return (
    <div className={styles.header}>
      <h1 className={styles.headerTitle}>Eatsys</h1>
      <form className={styles.headerForm}>
        <input
          className={styles.headerInput}
          type="text"
          placeholder="Search recipes now!"
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

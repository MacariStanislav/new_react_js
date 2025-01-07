import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/routes";
import styles from '../styles/Header.module.css'; // Использование стилей через CSS модули
import LOGO from '../../img/logo/LOGO 1.svg';
import AVATAR from '../../img/icon/monkey.svg';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Link to={ROUTES.HOME}>
          <img src={LOGO} alt="logo Staff" />
        </Link>
      </div>

      <div className={styles.info}>
        <div className={styles.user}>
          <div 
            className={styles.avatar} 
            style={{ backgroundImage: `url(${AVATAR})` }} // Пример с динамическим фоном
          />
          <div className={styles.username}>guest</div>
        </div>
        <form className={styles.form}>
          <div className={styles.icon}>
            <svg className="icon">
              <use xlinkHref={`${process.env.PUBLIC_URL}`} />
            </svg>
          </div>
          <div className={styles.input}>
            <input
              type="search"
              name="search"
              placeholder="Search for anything ..."
              autoComplete="off"
              onChange={() => {}}
              value=""
            />
          </div>
          {false && <div className={styles.box}></div>}
        </form>
        <div className={styles.account}>
          <Link to={ROUTES.HOME} className={styles.favourites}>
            <svg className={styles["icon-fav"]}>
              <use xlinkHref={`${process.env.PUBLIC_URL}`} />
            </svg>
          </Link>
          <Link to={ROUTES.CARD} className={styles.cart}>
            <svg className={styles["icon-cart"]}>
              <use xlinkHref={`${process.env.PUBLIC_URL}`} />
            </svg>
            <span className={styles.count}>2</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;

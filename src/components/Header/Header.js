import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.Header}>
      <Link className={styles.logo} to="/">
        <img src="/logo.svg" alt="logo" />
      </Link>
      <div className={styles.nav}>
        <Link className={styles.nav__item} to="/search/javascript">
          Search
        </Link>
        <HashLink className={styles.nav__item} to="/#how-it-works">
          How it works
        </HashLink>
        <HashLink className={styles.nav__item} to="/#about">
          About
        </HashLink>
      </div>
    </header>
  );
}

export default Header;

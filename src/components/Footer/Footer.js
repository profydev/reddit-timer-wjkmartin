import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.Footer}>
      <a className={styles.textLink} href="https://profy.dev/employers">profy.dev</a>
      <Link to="/"><img alt="logo" src="/logo_face.svg" /></Link>
      <Link className={styles.textLink} to="/terms">Terms & Privacy</Link>
    </footer>
  );
}

export default Footer;

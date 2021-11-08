import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Home.module.css';

const Home = () => (
  <div className={styles.Home}>
    <h1 className={styles.Hero__title}>No reactions to your reddit posts?</h1>
    <p className={styles.Hero__subTitle}>
      Great timing, great results! Find the best time to post on your subreddit.
    </p>
    <Link className={styles.Hero__linkButton} to="/search#javascript">
      SHOW ME THE BEST TIME
    </Link>
    <p className={styles.Hero__subreddit}>r/javascript</p>
    <Link to="/search#javascript">
      <img
        className={styles.Hero__image}
        alt="A heatmap displaying when the best time is to post of r/javascript"
        src="/table.png"
      />
    </Link>
  </div>
);

export default Home;

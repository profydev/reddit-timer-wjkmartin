/* eslint-disable no-trailing-spaces */
/* eslint-disable react/jsx-one-expression-per-line */
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
    <Link className={styles.Hero__image} to="/search#javascript">
      <img
        alt="A heatmap displaying when the best time is to post of r/javascript"
        src="/table.png"
      />
    </Link>
    <div className={styles.Info__block}>
      <h3 className={styles.Info__block_header}>How it works</h3>
      <p className={styles.Info__block_text}>
        • We find the 500 top posts from the past year for a subreddit.
        <br />• The data is visualized in a heatmap grouped by weekday and hour
        of the day.
        <br />• See immediately when to submit your reddit post.
      </p>
    </div>
    <div className={styles.Info__block}>
      <h3 className={styles.Info__block_header}>About</h3>
      <p className={styles.Info__block_text}>
        This app was created during a course on{' '}
        <a className={styles.Info__block_text_link} href="https://profy.dev">
          profy.dev
        </a>{' '}
        with the goal to implement a pixel-perfect real-world application with
        professional workflows and tools like Kanban, ClickUp, Figma, GitHub,
        pull requests and code reviews.{' '}
        <a
          className={styles.Info__block_text_link}
          href="https://profy.dev/employers"
        >
          Click here for more information.
        </a>
      </p>
    </div>
  </div>
);

export default Home;

import React from 'react';
import { useParams, Link } from 'react-router-dom';

import styles from './Search.module.css';

const Search = () => {
  const [subreddit, setSubreddit] = React.useState(useParams().subreddit);
  return (
    <div className={styles.Search}>
      <h1 className={styles.Search__title}>
        Find the best time for a subreddit
      </h1>
      <div
        className={styles.Search__inputArea}
      >
        <p className={styles.Search__preLabel}>r / </p>
        <input
          className={styles.Search__inputBox}
          type="text"
          onChange={(evt) => setSubreddit(evt.target.value)}
          defaultValue={subreddit}
        />
        <Link
          className={styles.Search__submitButton}
          to={`/search/${subreddit}`}
        >
          SEARCH
        </Link>
      </div>
    </div>
  );
};

export default Search;

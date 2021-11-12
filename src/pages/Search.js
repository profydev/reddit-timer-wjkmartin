import React, { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import styles from './Search.module.css';

const Search = () => {
  const history = useHistory();
  const subredditInitial = useParams().subreddit;
  const [subReddit, setSubreddit] = React.useState(subredditInitial);
  function handleSubmit(event) {
    event.preventDefault();
    history.push(`/search/${subReddit}`);
  }

  const onChange = (event) => {
    setSubreddit(event.target.value);
  };
  useEffect(() => {
    setSubreddit(subredditInitial);
  }, [subredditInitial]);

  return (
    <div className={styles.Search}>
      <h1 className={styles.Search__title}>
        Find the best time for a subreddit
      </h1>
      <form onSubmit={handleSubmit} className={styles.Search__inputArea}>
        <p className={styles.Search__preLabel}>r / </p>
        <input
          className={styles.Search__inputBox}
          type="text"
          name="subreddit"
          onChange={onChange}
          value={subReddit}
        />
        <button className={styles.Search__submitButton} type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;

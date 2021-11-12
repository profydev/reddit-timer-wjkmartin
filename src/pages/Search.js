import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import styles from './Search.module.css';

const Search = () => {
  const history = useHistory();
  const subredditInitial = useParams().subreddit;

  const [subReddit, setSubreddit] = useState(subredditInitial);
  const [isLocaded, setIsLoaded] = useState(false);
  function handleSubmit(event) {
    event.preventDefault();
    history.push(`/search/${subReddit}`);
  }

  const onChange = (event) => {
    setSubreddit(event.target.value);
  };
  useEffect(() => {
    setSubreddit(subredditInitial);

    fetch(`https://www.reddit.com/r/${subReddit}/top.json?t=year&limit=500`)
      .then((response) => response.json())
      .then(
        (data) => {
          setIsLoaded(true);
          console.log(data);
        },
        (error) => {
          setIsLoaded(true);
          console.log(error);
        },
      );
  }, [subredditInitial, subReddit]);

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

      {isLocaded ? (
        ''
      ) : (
        <img
          className={styles.Search__spinner}
          src="/loading_spinner.svg"
          alt="spinner"
        />
      )}
    </div>
  );
};

export default Search;

/* eslint-disable comma-dangle */
import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import useFetchPosts from '../hooks/useFetchPosts';
import useInput from '../hooks/useInput';

import styles from './Search.module.css';

const Search = () => {
  const history = useHistory();
  const params = useParams();
  const [subreddit, setSubreddit] = useState(params.subreddit);
  // eslint-disable-next-line prefer-const
  let [inputValue, input] = useInput(styles.Search__inputBox, subreddit);

  const { isLoading, hasError, posts } = useFetchPosts(subreddit);

  function handleSubmit(event) {
    event.preventDefault();
    history.push(`/search/${inputValue}`);
    setSubreddit(inputValue);
    console.log(posts);
  }

  useEffect(() => {
    if (subreddit !== params.subreddit) {
      setSubreddit(params.subreddit);
    }
  }, [params.subreddit, subreddit, input]);

  return (
    <div className={styles.Search}>
      <h1 className={styles.Search__title}>
        Find the best time for a subreddit
      </h1>
      <form onSubmit={handleSubmit} className={styles.Search__inputArea}>
        <p className={styles.Search__preLabel}>r / </p>
        {input}
        <button className={styles.Search__submitButton} type="submit">
          Search
        </button>
      </form>
      {!isLoading ? (
        ''
      ) : (
        <img
          className={styles.Search__spinner}
          src="/loading_spinner.svg"
          alt="spinner"
        />
      )}
      {hasError ? 'error' : ''}
    </div>
  );
};

export default Search;

/* eslint-disable comma-dangle */
import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import styles from './Search.module.css';

const Search = () => {
  const history = useHistory();
  const [subredditInitial, setSubredditInitial] = useState(
    useParams().subreddit
  );
  const [subReddit, setSubreddit] = useState(subredditInitial);
  let inputValue = subredditInitial;
  const [isLoaded, setIsLoaded] = useState(false);
  const [subredditInsufData, setSubredditInsufData] = useState(false);
  const [isInvalidSubreddit, setIsInvalidSubreddit] = useState(false);
  function handleSubmit(event) {
    event.preventDefault();
    history.push(`/search/${subReddit}`);
    setSubredditInitial(inputValue);
    setSubreddit(inputValue);
  }

  const onChange = (event) => {
    inputValue = event.target.value;
  };

  useEffect(() => {
    async function fetchPosts({ previousPosts = [], after }, _subReddit) {
      if (previousPosts.length >= 500) {
        return previousPosts;
      }

      const response = await fetch(
        after
          ? `https://www.reddit.com/r/${_subReddit}/top.json?t=year&limit=100&after=${after}`
          : `https://www.reddit.com/r/${_subReddit}/top.json?t=year&limit=100`
      ).then((res) => res.json());
      if (response.data.children.length < 100) {
        setSubredditInsufData(true);
        return null;
      }

      return fetchPosts(
        {
          previousPosts: previousPosts.concat(response.data.children),
          after: response.data.after,
        },
        _subReddit
      );
    }

    const posts = fetchPosts({}, subReddit);

    posts
      .catch(() => {
        if (!subredditInsufData) {
          setSubredditInsufData(false);
          setIsInvalidSubreddit(true);
        }
      })
      .finally(() => {
        setIsLoaded(true);
      });
  }, [subReddit, subredditInsufData, isInvalidSubreddit]);

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
          defaultValue={subredditInitial}
        />
        <button className={styles.Search__submitButton} type="submit">
          Search
        </button>
      </form>
      {isLoaded ? (
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

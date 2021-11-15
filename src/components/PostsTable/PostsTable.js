/* eslint-disable react/prop-types */
import React from 'react';

import styles from './PostsTable.module.css';

const PostsTable = (props) => {
  const { posts } = props;

  // takes a string of greater than "length" characters and returns
  // a string of "length" characters or less
  const truncate = (str, length) => {
    if (str.length > length) {
      return `${str.substring(0, length)}...`;
    }
    return str;
  };

  return (
    <table className={styles.PostsTable}>
      <thead>
        <tr>
          <th>Title</th>
          <th>Time Posted</th>
          <th>Score</th>
          <th>Comments</th>
          <th>Author</th>
        </tr>
      </thead>
      <tbody>
        {posts
          .sort(
            (a, b) => parseInt(a.data.created, 10) - parseInt(b.data.created, 10),
          )
          .map((post) => (
            <tr key={post.data.id}>
              <td>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`http://www.reddit.com${post.data.permalink}`}
                >
                  {truncate(post.data.title, 50)}
                </a>
              </td>
              <td>
                {new Date(post.data.created_utc * 1000).toLocaleString(
                  'en-US',
                  {
                    hour: 'numeric',
                    minute: 'numeric',
                    hour12: true,
                  },
                )}
              </td>
              <td>{post.data.score}</td>
              <td>{post.data.num_comments}</td>
              <td>
                {post.data.author === '[deleted]' ? (
                  '[deleted]'
                ) : (
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`http://www.reddit.com/u/${post.data.author}`}
                  >
                    {truncate(post.data.author, 10)}
                  </a>
                )}
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default PostsTable;

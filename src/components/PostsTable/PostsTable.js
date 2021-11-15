/* eslint-disable react/prop-types */
import React from 'react';

import styles from './PostsTable.module.css';

const PostsTable = (props) => {
  const { posts } = props;
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
        {posts.map((post) => (
          <tr key={post.data.id}>
            <td><a href={`http://www.reddit.com${post.data.permalink}`}>{post.data.title}</a></td>
            <td>{new Date(post.data.created_utc).toLocaleTimeString()}</td>
            <td>{post.data.score}</td>
            <td>{post.data.num_comments}</td>
            <td><a href={`http://www.reddit.com/u/${post.data.author}`}>{post.data.author}</a></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PostsTable;

/* eslint-disable react/prop-types */
import React from 'react';

import styles from './Heatmap.module.css';

const Heatmap = (props) => {
  // eslint-disable-next-line no-unused-vars
  const { posts } = props;
  console.log(posts);
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  // create a 2d array of posts with the day of the week as the key and the hour of the day as the
  // value
  const postsByDay = new Array(7).fill(0).map(() => new Array(24).fill(0));
  // Sun, Mon, Tues, Wed, Thurs, Fri, Sat
  posts.forEach((post) => {
    const date = new Date(post.data.created_utc * 1000);
    const day = date.getDay();
    const hour = date.getHours();
    postsByDay[day][hour] += 1;
  });

  postsElems = postsByDay.forEach(week => {
      week.map(numberOfPosts => {
          return <div className={styles.}></div>
      })
  })
  return (
    <div className={styles.Heatmap}>
      <p>Heatmap</p>
      <p>
        All times are shown in your time zone:
        {timezone}
      </p>
    </div>
  );
};

export default Heatmap;

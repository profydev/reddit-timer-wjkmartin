/* eslint-disable react/prop-types */
import React, { useState } from 'react';

import colorsByNumberOfPosts from './heatmapNodeColorsByNumber';
import styles from './Heatmap.module.css';

const Heatmap = (props) => {
  // eslint-disable-next-line no-unused-vars
  const { setSelectedPosts, posts } = props;
  const [selectedNode, setSelectedNode] = useState(null);
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

  const postElems = [];

  const handleClick = (time) => {
    setSelectedNode(time);
    setSelectedPosts(
      posts.filter((post) => {
        const date = new Date(post.data.created_utc * 1000);
        return date.getHours() === time.hour && date.getDay() === time.day;
      }),
    );
  };

  postsByDay.forEach((week, i1) => {
    postElems[i1] = week.map((numberOfPosts, i2) => (
      <div
        style={{ backgroundColor: colorsByNumberOfPosts(numberOfPosts) }}
        className={`${
          selectedNode?.day === i1 && selectedNode?.hour === i2
            ? styles.Heatmap__node_selected
            : ''
        } ${styles.Heatmap__node}`}
        // eslint-disable-next-line react/no-array-index-key
        key={`${i1}-${i2}`}
        onClick={() => handleClick({ day: i1, hour: i2 })}
        onKeyUp={() => handleClick({ day: i1, hour: i2 })}
        role="button"
        tabIndex={((i1 + 1) * 24) + (i2 + 1)}
      >
        {numberOfPosts}
      </div>
    ));
  });

  return (
    <div className={styles.Heatmap}>
      <div style={{ display: 'flex' }}>
        <div className={styles.Heatmap__days}>
          <div className={styles.Heatmap__days_day}>Sunday</div>
          <div className={styles.Heatmap__days_day}>Monday</div>
          <div className={styles.Heatmap__days_day}>Tuesday</div>
          <div className={styles.Heatmap__days_day}>Wednesday</div>
          <div className={styles.Heatmap__days_day}>Thursday</div>
          <div className={styles.Heatmap__days_day}>Friday</div>
          <div className={styles.Heatmap__days_day}>Saturday</div>
        </div>
        <div>
          <div className={styles.Heatmap__times}>
            {new Array(12).fill(0).map((_, i) => (
              <div className={styles.Heatmap__times_time}>
                {Math.abs(i * 2 - 12) % 12 || 12}
                :00
                {i * 2 - 12 < 0 ? 'am' : 'pm'}
              </div>
            ))}
          </div>
          <div className={styles.Heatmap__nodeContainer}>{postElems}</div>
        </div>
      </div>
      <p className={styles.Heatmap__timezone}>
        All times are shown in your time zone:
        {timezone}
      </p>
    </div>
  );
};

export default Heatmap;

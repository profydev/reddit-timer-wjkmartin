import React, { useState, useEffect } from 'react';

function useInput(style, defaultSubreddit) {
  const [value, setValue] = useState(defaultSubreddit);
  useEffect(() => {
    setValue(defaultSubreddit);
  }, [defaultSubreddit]);
  const input = (
    <input
      className={style}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      type="text"
    />
  );
  return [value, input];
}

export default useInput;

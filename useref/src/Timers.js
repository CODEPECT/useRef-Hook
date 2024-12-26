import React, { useState, useRef, useEffect } from 'react';

export default function Timers() {
  const [count, setCount] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
      console.log("mounted");
    }, 1000);

    return () => {
      clearInterval(timerRef.current);
        console.log("unmounted");
    };
  });

  return <p>Count: {count}</p>;
}
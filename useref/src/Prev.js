import React, { useState, useEffect, useRef } from 'react';

 export default function Prev() {
  const [name, setName] = useState('John');
  const prevNameRef = useRef('');

  useEffect(() => {
    prevNameRef.current = name;
  }, [name]);

  return (
    <div>
      <p>Current Name: {name}</p>
      <p>Previous Name: {prevNameRef.current}</p>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}
import React, { useRef } from 'react';

export default function Recalc() {
  const expensiveValue = useRef(calculateExpensiveValue());

  function calculateExpensiveValue() {
    console.log('Calculating expensive value...');
    return 42; // Example value
  }

  return (
    <div>
      <p>Expensive Value: {expensiveValue.current}</p>
    </div>
  );
}
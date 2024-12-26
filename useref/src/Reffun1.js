import React, { useRef } from 'react'

export default function Reffun1() {
  
    let value = 10;
    let val = useRef(10)
    const increment = () => {
        val.current = val.current +5;
       value= value+2;
        console.log(val.current);
    }

  return (
    <div style={{textAlign:'center', paddingTop:'100px'}}>
      <h1>useRef using Functional Component</h1>
        <h3>{value}</h3>
        <button onClick={increment}>Increment</button>
    </div>
  )
}

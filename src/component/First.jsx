import React, { useState } from "react";

function First() {
  let [count, setCount] = useState(0);
  function Increment() {
    setCount(count + 1);
  }
  function Decrement() {
    setCount(count - 1);
  }
  function Reset() {
    setCount(0);
  }
  return (
    <>
      <p>{count}</p>
      <button onClick={Decrement}>Decrement</button>
      <button onClick={Reset}>Reset</button>
      <button onClick={Increment}>Increment</button>
    </>
  );
}

export default First;

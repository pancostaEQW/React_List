import React, {useState} from "react";

const Counter = function () {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1)
   }
   function decrement() {
    setCount(count - 1)
   }

  return (
    <div>
      <b>{count}</b>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;
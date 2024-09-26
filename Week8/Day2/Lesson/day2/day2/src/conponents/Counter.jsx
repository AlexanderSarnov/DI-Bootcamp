import { useState, useEffect } from "react";
const Counter = (props) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count === 10) setCount(0);
  }, [count]);

  return (
    <>
      <button onClick={() => setCount((count) => count + 1)}> + </button>
      {count}
      <button onClick={() => setCount(count - 1)}> - </button>
    </>
  );
};

export default Counter;

import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div style={{ backgroundColor: "yellow", color: "white" }}>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>increase</button>
      <button onClick={() => setCount(count - 1)}>Dicrease</button>
    </div>
  );
}

export default Counter;

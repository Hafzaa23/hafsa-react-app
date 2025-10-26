import { useState } from "react";
export function Tiriye() {
  let [count, setCount] = useState(0);

  return (
    <div style={{ backgroundColor: "yellow", color: "black" }}>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>increase</button>
      <button onClick={() => setCount(count - 1)}>Dicrease</button>
    </div>
  );
}

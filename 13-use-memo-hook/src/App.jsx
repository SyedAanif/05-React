import { useMemo, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(0);

  const expensiveTask = (num) => {
    console.log("Started execution of expensive task");
    // simulate a long running expensive task
    for (let i = 0; i < 1000000000; i++) {
      // looooooonnnnnggggggg running task
    }
    return num * 2;
  };

  // this will make the re-render happen slow, because it is long running
  // see the difference by commenting below memo-hook
  // let doubleValue = expensiveTask(num);

  // to optimise the long running expensive tasks, we use the memo hook
  // it uses memoization to store already calculated values,
  // so that we don't get stuck in the phase of re-calculations
  // Analogous to Cache
  // useMemo(() => calculativeValue, [dependencies]);
  // calculativeValue: the function for which the memoization should operate
  // dependencies: the value change for which the memoization should work
  // so the above long running task can be wrapped into the memoization
  let doubleValue = useMemo(() => expensiveTask(num), [num]);

  return (
    <div className="container">
      <h1>Use Memo Hook</h1>
      <p>
        used for <b>Memoization</b>
      </p>
      <p>
        useMemo is a React Hook that lets you cache the result of a calculation
        between re-renders.
      </p>
      <p>
        helps to optimise multiple occuring expensive
        tasks/operations/calculations by storing the already calculated values
        and re-use them.
      </p>
      <p>This stores the latest occuring calculated values</p>
      <p>Think about Dynamic Programming Memoization/Top Down Approach</p>

      <br />
      <br />
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>Count: {count}</p>
      <br />
      <input
        type="number"
        placeholder="Enter your number"
        value={num}
        onChange={(e) => setNum(e.target.value)}
      />
      <p>Expensive Value: {doubleValue}</p>
    </div>
  );
}

export default App;

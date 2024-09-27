import React, { useCallback, useEffect, useRef, useState } from "react";

const ExpensiveComponent = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const prevFunc = useRef(null);

  // will re-run but not re-create if we use callback-hook
  const expensiveTask = useCallback(() => {
    console.log("Started execution of expensive task");
    let result = 0;
    // simulate a long running expensive task
    for (let i = 0; i < 1000000000; i++) {
      // looooooonnnnnggggggg running task
      result += i;
    }
    return result;
  }, [count]); // dependency list for re-creation of the function

  // to compare the references between re-creation of functions
  useEffect(() => {
    if (prevFunc.current) {
      // if reference already there, do compare
      if (prevFunc.current === expensiveTask) {
        console.log("References are equal. Hence, no re-creation");
      } else {
        console.log("References are NOT equal. Hence, re-creation");
      }
    } else {
      // if no reference attached, then associate the reference
      prevFunc.current = expensiveTask;
    }
  }, [expensiveTask]);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>Count: {count}</p>
      <br />
      <input
        type="text"
        placeholder="Type Something"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>Expensive Value: {expensiveTask()}</p>
    </div>
  );
};

export default ExpensiveComponent;

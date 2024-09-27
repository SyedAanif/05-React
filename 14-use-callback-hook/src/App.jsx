import { useCallback, useState } from "react";
import "./App.css";
import ChildComponent from "./components/ChildComponent";
import ExpensiveComponent from "./components/ExpensiveComponent";

function App() {
  const [count, setCount] = useState(0);

  // once re-render happens, new reference of function gets created,
  // this leads to re-render of child component on state lifting/pass of fucntion to child component
  // even if React.memo is used
  // const handleClick = () => {
  //   setCount(count + 1);
  // };

  // The above problem can be solved by wrapping the function reference in use-callback-hook
  // This leads to freze of function. No value will be moved
  // Function will be re-created on change of dependency list
  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, []); // dependency list.

  return (
    <div className="container">
      <h1>Use Callback Hook</h1>

      <ul>
        <li>Memoise function reference between re-renders</li>
        <li>cache a function definition between re-renders</li>
        <li>Prevent re-render of Child Components</li>
        <li>Freeze function reference</li>
        <li>Handle expensive operations by freezing the function references for re-creation</li>
      </ul>

      <div>
        <button onClick={handleClick}>Increment</button>
      </div>
      <div>Count: {count}</div>

      {/* Will be re-rendered unnnecessarily on render of parent component */}
      {/* to prevent it wrap child component in React.memo. This works for PROPS value only. 
      To make it work for function reference also, use-callback-hook*/}
      {/* will be re-rendered only when some props to the child component changes */}
      <div>
        <ChildComponent buttonName="Click Me" click={handleClick} />
      </div>

      <div>
        <ExpensiveComponent/>
      </div>
    </div>
  );
}

export default App;

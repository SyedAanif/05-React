import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }

  const [total, setTotal] = useState(1);
  function handleTotal() {
    setTotal(total + 1);
  }
  // useEffect(() => {
  //   first; // effect based action/function

  //   return () => {
  //     second; // clean-up resources function
  //   };
  // }, [third] // comma separated dependency list on whose change the effect is run);

  // Variation:(see by uncommenting and keep clicking the button)
  // 1. Runs on EVERY render
  // useEffect(() => {
  //   alert("I will run on every render");
  // });

  // 2. Runs only on first render
  // useEffect(() => {
  //   alert("I will run on only first render");
  // }, []);

  // 3. Runs when the dependency list is updated
  // useEffect(() => {
  //   alert("I will run everytime when count is updated");
  // }, [count]);

  // 4. Multiple dependecies when any one of them is updated
  // useEffect(() => {
  //   alert("I will run everytime when count or total is updated");
  // }, [count, total]);

  // 5. Clean-up function
  useEffect(() => {
    alert("I will clean up resources on unmount")
  
    return () => {
      // happens on every new render, the dependency list is unmounted from UI
      // then updated back
      alert("Gives indication of unmount")
    }
  }, [count])
  

  return (
    <div>
      <h1>Use Effect Hook</h1>
      <p>Generate after effects based on a condition/event</p>
      <p>Count is: {count}</p>
      <button onClick={handleClick}>Update Count</button>

      <p>Total is: {total}</p>
      <button onClick={handleTotal}>Update Total</button>
    </div>
  );
}

export default App;

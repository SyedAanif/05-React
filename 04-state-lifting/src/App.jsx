import { useState } from "react";
import "./App.css";
import Child from "./components/Child";

function App() {
  // create state
  // manage state
  // change state
  // SYNC to every child
  const [name, setName] = useState('')
  return (
    <>
      <h1>State Lifting</h1>
      <p>
        Means passing of app state from child to parent or between children
        using the parent
      </p>
      <h2>State from child in parent is: {name}</h2>
      <Child child="child1" name={name} setName={setName}/>
      <Child child="child2" name={name} setName={setName}/>
    </>
  );
}

export default App;

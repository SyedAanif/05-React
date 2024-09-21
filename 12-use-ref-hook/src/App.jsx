import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  // state variable causes a re-render
  const [count, setCount] = useState(0);

  // we want the value to be persisted across re-renders
  // but when re-render happens for count, this let val is re-initialised.
  // hence the value is not persisted across re-renders
  // thus use the useRef hook for persistenece across re-renders
  // let val = 0;

  // using useRef hook
  // object with initial value
  // mutable via the .current property
  // this doesn't trigger any re-render
  let val = useRef(0);

  const handeClick = () => {
    console.log(`Current value is: ${val.current}`);
    // val = val + 1;
    val.current = val.current + 1;
    console.log(`Updated Value in handleClick is: ${val.current}`);
    setCount(count + 1);
  };

  useEffect(() => {
    console.log(`Count value on each re-render is: ${count}`);
  });

  // create a ref to the first button
  // this will help us to manage the DOM element directly
  // now the button after link by ref={btnRef} can be accessed directly
  let btnRef = useRef();

  const changeColour = () => {
    btnRef.current.style.backgroundColor = "red";
  };

  return (
    <div className="container">
      <h1>Use Ref</h1>
      <p>Used when:</p>
      <ol>
        <li>
          to create variable whose value should be persisted across re-renders
        </li>
        <li>Manage any DOM element directly</li>
      </ol>
      {/* This is to show first usage of useRef */}
      {/* Link the useRef btn ref to the button */}
      <button onClick={handeClick} ref={btnRef}>
        Increment
      </button>
      <p>Count: {count}</p>

      {/* This is to show second usage of useRef */}
      <button onClick={changeColour}>Change Colour of First Button</button>
    </div>
  );
}

export default App;

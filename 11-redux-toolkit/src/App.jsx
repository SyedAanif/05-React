import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import {
  decrement,
  increment,
  incrementByAmount,
  reset,
} from "./features/counter/counterSlice";
import { useState } from "react";

function App() {
  const [amount, setAmount] = useState(0);

  // Fetch the State using Selector
  // From the Slice check the state name and it's value
  const count = useSelector((state) => state.counter.value);

  // Dispatch the Actions
  const dispatch = useDispatch();

  // Handle Events
  function handleIncrementClick() {
    // dispatch the exported action from the slice
    dispatch(increment());
  }

  function handleDecrementClick() {
    dispatch(decrement());
  }

  function handleResetClick() {
    dispatch(reset());
  }

  function handleSetAmount() {
    // Sending payload as dispatch to Increment by Amount. Thus has payload
    dispatch(incrementByAmount(Number(amount)));
  }

  return (
    <div className="container">
      <h1>Redux Toolkit</h1>
      <p>
        Centralised way to manage <b>state</b> of the application
      </p>
      <ul>
        <li>Event Trigger</li>
        <li>Handle Event</li>
        <li>Action(event+payload) dispatch</li>
        <li>
          Store(where all states are managed) looks for Reducer function for the
          action
        </li>
        <li>Reducer(function) executes the logic</li>
        <li>Updates state in Store</li>
        <li>Update State in UI</li>
        <li>
          Slice is collection state features(intial state) and their reducer
          functions
        </li>
        <li>Selector fetches the State</li>
      </ul>

      <button onClick={handleIncrementClick}>+</button>
      <h2>Count: {count}</h2>
      <button onClick={handleDecrementClick}>-</button>
      <button onClick={handleResetClick}>Reset</button>
      <input
        type="Number"
        value={amount}
        placeholder="Enter Amount"
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={handleSetAmount}>Set Amount</button>
    </div>
  );
}

export default App;

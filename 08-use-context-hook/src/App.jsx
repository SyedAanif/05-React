import { createContext, useState } from "react";
import "./App.css";
import ChildA from "./components/ChildA";

// create context and export the context
const userContext = createContext();
export { userContext };

// wrap all those child(in need of the data, who will be a consumer) in a provider
// <userContext.Provider> child <userContext.Provider>/>

// pass the value to the context provider

// consume exported context in the child component

function App() {
  const [user, setUser] = useState({ name: "Context Name" });
  return (
    <div className="container">
      <h1>Use Context Hook - Prop Drilling</h1>
      <p>
        Props move to multi-level child components even when those props are not
        required at certain child levels
      </p>
      <p>To solve this we use React Context Hook:</p>
      <ol>
        <li>Create Context</li>
        <li>Provide Context</li>
        <li>Consume Context</li>
      </ol>
      <p>
        Parent becomes the provider of context and the children component in
        need to data can Consume from the context. Rest child in the multi-level
        chain don't need to see the data
      </p>

      {/* See the hierarchy in components */}
      <userContext.Provider value={user}>
        {/* wrap the child in context prvider */}
        {/* NOTE: Here all the multi-levels can now become the context consumer */}
        <ChildA />
      </userContext.Provider>
    </div>
  );
}

export default App;

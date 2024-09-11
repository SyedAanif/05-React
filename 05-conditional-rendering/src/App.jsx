import { useState } from "react";
import "./App.css";
import LogoutBtn from "./components/LogoutBtn";
import LoginBtn from "./components/LoginBtn";

{
  /* <h1>Conditional Rendering</h1>
<p>Render React components based on conditions/flags</p>
<p>Can be done using:</p>
<ul>
  <li>if-else</li>
  <li>ternary operator</li>
  <li>logical operator</li>
  <li>early return</li>
</ul> */
}

function App() {
  const [isLoggedIn, setLoggedIn] = useState(true);
  // if-else
  // if (isLoggedIn) {
  //   return <LogoutBtn />;
  // } else {
  //   return <LoginBtn />;
  // }

  // ternary operator
  // return <div>{isLoggedIn ? <LogoutBtn /> : <LoginBtn />}</div>;

  // early return
  if (!isLoggedIn) {
    return <LoginBtn />;
  }
  // Logical operator
  return (
    <div>
      <h1>Logical Operator</h1>
      {isLoggedIn && <LogoutBtn />}
    </div>
  );
}

export default App;

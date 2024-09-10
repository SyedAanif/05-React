import UserCard from "./components/UserCard";
import "./App.css";
import img1 from "./assets/1.png";
import img2 from "./assets/2.png";
import img3 from "./assets/3.png";
import ChildComponent from "./components/ChildComponent";
import { useState } from "react";
import Button from "./components/Button";

function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  };

  return (
    // <> Fragment
    <div className="container">
      <h1>Welcome to Components</h1>
      <UserCard
        name="React 1"
        desc="First Description"
        imgSrc={img1}
        style={{ borderRadius: "10px" }}
      />
      <UserCard
        name="React 2"
        desc="Second Description"
        imgSrc={img2}
        style={{ borderRadius: "10px" }}
      />
      <UserCard
        name="React 3"
        desc="Third Description"
        imgSrc={img3}
        style={{ borderRadius: "10px" }}
      />
      <ChildComponent name="CHILDREN">
        {/* Anything between the component tags is CHILDREN */}
        {/* Used when we want to create HIGHER ORDER COMPONENT */}
        <h2>Heading 2</h2>
        <p>Some Paragraph</p>
        <p>Second Paragraph</p>
      </ChildComponent>

      {/* Pass function to the child component */}
      <Button incrementCount={handleClick} text="Click Me">
        <h2>Clicked {count} times</h2>
      </Button>
    </div>
    // </>
  );
}

export default App;

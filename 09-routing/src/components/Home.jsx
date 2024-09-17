import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  // used to navigate between pages
  const navigate = useNavigate();
  function handleClick() {
    navigate("/about");
  }
  return (
    <div>
      <h2>Home Page</h2>
      <button onClick={handleClick}>
        Move to <i>About</i> Page
      </button>
    </div>
  );
};

export default Home;

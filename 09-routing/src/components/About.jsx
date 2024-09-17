import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/dashboard");
  }
  return (
    <div>
      <h2>About Page</h2>
      <button onClick={handleClick}>Move to Dashboard</button>
    </div>
  );
};

export default About;

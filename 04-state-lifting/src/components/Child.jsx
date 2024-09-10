import React from "react";

const Child = (props) => {
  return (
    <div>
      <h2>State from parent in {props.child} is: {props.name}</h2>
      <input
        type="text"
        placeholder="Type Here"
        onChange={(e) => props.setName(e.target.value)}
      ></input>
    </div>
  );
};

export default Child;

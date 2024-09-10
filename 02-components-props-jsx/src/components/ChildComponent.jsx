import React from "react";

const ChildComponent = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      {/* Get hold of the CHILDREN */}
      {props.children}
    </div>
  );
};

export default ChildComponent;

import React from "react";

const Button = (props) => {
  return (
    <div>
      {props.children}
      <button onClick={props.incrementCount}>{props.text}</button>
    </div>
  );
};

export default Button;

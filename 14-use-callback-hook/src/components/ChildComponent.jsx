import React from "react";

// by wrapping this in React.meo, the re-render is prevented unless some props don't change for this component
// But React.memo only works for props value, not for funstion. To prevent for funstion pass re-render, use-callback-hook
const ChildComponent = React.memo((props) => {
  // this will be triggered on each render  from this component or the parent component
  console.log("Child Component Render");

  return (
    <div>
      <button onClick={props.click}>{props.buttonName}</button>
    </div>
  );
});

export default ChildComponent;

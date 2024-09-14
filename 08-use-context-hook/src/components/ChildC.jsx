import React, { useContext } from "react";
import { userContext } from "../App";

const ChildC = () => {
  // use the consumed context
  const user = useContext(userContext);
  return (
    <div>
      <h2>Consumed Value: {user.name}</h2>
    </div>
  );
};

export default ChildC;

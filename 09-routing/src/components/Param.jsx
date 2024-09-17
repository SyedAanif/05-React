import React from "react";
import { useParams } from "react-router-dom";

const Param = () => {
  // is extracted from useParams hook from the path-parameters
  const { id } = useParams();
  return (
    <div>
      <h2>Params: {id}</h2>
    </div>
  );
};

export default Param;

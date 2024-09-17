import React from "react";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <h2>Dashboard Page</h2>
      {/* This tag is used to render NESTED routes */}
      <Outlet/>
    </div>
  );
};

export default Dashboard;

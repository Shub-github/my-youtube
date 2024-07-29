import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
//outlet component tells the route element where and when to render the child route within page.

const Body = () => {
  return (
    <div className="grid grid-flow-col">
      <Sidebar />
      {/* In the place of outlet either the watch page render or MainContainer component render */}
      <Outlet />
    </div>
  );
};

export default Body;

import React from "react";
import Router from "../../routes/Router";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";

const SharedLayout = () => {
  return (
    <div className="shared-layout">
      <Sidebar />
      <div className="main-layout">
        <Navbar />
        <div className="content">
          <Router />
        </div>
      </div>
    </div>
  );
};

export default SharedLayout;

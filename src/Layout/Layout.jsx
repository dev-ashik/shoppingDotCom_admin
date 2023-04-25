import React from "react";
import "./Layout.css";
import Topbar from "../Components/Topbar/Topbar";
import Sidebar from "../Components/Sidebar/Sidebar";

const Layout = ({ children }) => {
  return (
    <>
      <Topbar />
      <div className="container">
        <div className="layout_sidebar">
          <Sidebar />
        </div>
        <div className="layout_children">{children}</div>
      </div>
    </>
  );
};

export default Layout;

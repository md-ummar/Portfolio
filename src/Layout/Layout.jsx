import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Contact from "../components/Contact";

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Contact />
    </>
  );
}

export default Layout;

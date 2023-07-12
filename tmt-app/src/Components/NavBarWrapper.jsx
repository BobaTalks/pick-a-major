import React from "react";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";

function NavBarWrapper() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

export default NavBarWrapper;
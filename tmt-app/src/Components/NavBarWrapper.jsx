import React from 'react';
import { Outlet } from 'react-router-dom';

import NavBar from './NavBar';

function NavBarWrapper() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

export default NavBarWrapper;

// Layout.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from '../components/side-bar/SideBar';

const Layout = () => {
  return (
    <div className="flex">
      <SideBar />
      <div className="flex flex-grow px-6">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;

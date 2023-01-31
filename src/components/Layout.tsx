import React, { Component, FC } from "react";
import NavbarLogin from "./NavbarLogin";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="w-full h-screen bg-gray-200 dark:bg-gray-600 flex flex-col overflow-auto">
      <NavbarLogin />
      <div className="h-full w-full overflow-auto p-2">{children}</div>
    </div>
  );
};

export default Layout;

import React, { Component } from "react";
import NavbarLogin from "./NavbarLogin";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

export default class Layout extends Component<LayoutProps> {
  render() {
    return (
      <div className="w-full h-screen bg-gray-200 flex flex-col overflow-auto">
        <NavbarLogin />
        <div className="h-full overflow-auto">{this.props.children}</div>
      </div>
    );
  }
}

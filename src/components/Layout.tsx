import React, { Component } from "react";
import NavbarLogin from "./NavbarLogin";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTp";

interface LayoutProps {
  children: React.ReactNode;
  onScoll?: (e: React.ReactNode) => void;
  setRef?: React.Ref<HTMLDivElement>;
}

export default class Layout extends Component<LayoutProps> {
  render() {
    return (
      <div className="w-full h-screen bg-gray-200 flex flex-col overflow-auto">
        <NavbarLogin />
        <div className="h-full overflow-auto p-3">{this.props.children}</div>
      </div>
    );
  }
}

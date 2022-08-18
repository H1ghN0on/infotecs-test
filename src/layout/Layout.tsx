import React from "react";
import Aside, { NoteType } from "../components/Aside";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <header>
        <div className="logo">ToDo</div>
      </header>

      <Aside />

      <main className="page-wrapper">{children}</main>
    </div>
  );
};

export default Layout;

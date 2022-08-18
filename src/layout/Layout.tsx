import React from "react";
import Aside, { NoteType } from "../components/Aside";

interface LayoutProps {
  notes: NoteType[];
  switchNote: (note: NoteType) => void;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ switchNote, notes, children }) => {
  return (
    <div>
      <header>
        <div className="logo">ToDo</div>
      </header>

      <Aside switchNote={switchNote} notes={notes} />

      <main className="page-wrapper">{children}</main>
    </div>
  );
};

export default Layout;

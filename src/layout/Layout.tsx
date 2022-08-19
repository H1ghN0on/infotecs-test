import React from "react";
import Aside from "../components/Aside";
import useResizable from "../hooks/useResizable";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const asideRef = React.useRef(null);
  const { resizableWidth, startResizing } = useResizable(
    {
      minWidth: 300,
      maxWidth: 850,
    },
    asideRef
  );

  return (
    <div>
      <header>
        <div className="logo">ToDo</div>
      </header>
      <div className="main-wrapper">
        <Aside
          ref={asideRef}
          resizableWidth={resizableWidth}
          startResizing={startResizing}
        />

        <main style={{ marginLeft: resizableWidth }} className="page-wrapper">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;

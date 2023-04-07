import * as React from "react";
import Header from "./header/Header";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <main>
      <Header />
      {children}
    </main>
  );
};

export default Layout;

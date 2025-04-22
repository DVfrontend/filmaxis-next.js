import React from "react";
// import SpiderMan from "./SpiderMan";
// import Interstellar from "./Interstellar";
// import GreenBook from "./GreenBook";

type LayoutProps = {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* <Navbar />
      <main className="flex-grow container mx-auto px-4 py-6">*/}
        {children}
      {/*</main>
      <Interstellar /> */}
    </div>
  );
};

export default Layout;

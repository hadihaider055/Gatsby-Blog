import React from "react";
import Footer from "../footer";
import Navbar from "../navbar";

const Layout = ({ children }) => {
  return (
    <>
      <div className="flex flex-col overflow-x-hidden bg-gray-50">
        <div className="min-h-screen">
          <Navbar />
          {children}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;

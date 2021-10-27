import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-800 w-screen h-14 pt-4">
      <div className="flex justify-center items-center">
        <p className="tracking-wider font-serif text-white font-medium">
          &copy; 2021 <span className="text-purple-700">Tiedup. </span>
          <span>All rights reserved.</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;

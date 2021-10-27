import React, { useState } from "react";
import { Link } from "gatsby";
import { FiAlignJustify } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const navLink =
    "block text-center text-xl capitalize text-gray-600 tracking-wider py-4 border-t-2 border-solid border-gray-200 transition-all duration-300 ease-in-out font-serif md:p-0 md:border-t-0 md:mr-8 md:text-xl";
  const activeLink = "text-purple-700";

  return (
    <nav className="flex items-center justify-center md:h-24">
      <div className="max-w-screen-xl w-11/12 md:flex md:items-center">
        <div className="h-24 flex justify-between items-center md:p-0 md:mr-8 md:h-auto">
          <Link to="/">
            <span className="font-serif text-2xl text-purple-700">Tiedup</span>
            <span className="font-sans text-2xl">.</span>
            <span className="text-gray-800 font-sans mt-6 text-xl">pk</span>
          </Link>
          <button
            className="py-1 px-3 md:hidden"
            onClick={() => setShow(!show)}
          >
            {show ? (
              <AiOutlineClose className="text-2xl transition-all duration-700 ease-in-out" />
            ) : (
              <FiAlignJustify className="text-2xl transition-all duration-700 ease-in-out" />
            )}
          </button>
        </div>
        <div
          className={`overflow-hidden flex flex-col transition-all duration-300 ease-in-out md:h-auto md:flex-row md:items-center md:w-full md:relative ${
            show ? "h-96 absolute z-10 bg-gray-50 w-full" : "h-0 absolute"
          }`}
        >
          <Link
            to="/"
            className={navLink}
            activeClassName={activeLink}
            onClick={() => setShow(false)}
          >
            home
          </Link>
          <Link
            to="/recipes"
            className={navLink}
            activeClassName={activeLink}
            onClick={() => setShow(false)}
          >
            recipes
          </Link>
          <Link
            to="/tags"
            className={navLink}
            activeClassName={activeLink}
            onClick={() => setShow(false)}
          >
            tags
          </Link>
          <Link
            to="/about"
            className={navLink}
            activeClassName={activeLink}
            onClick={() => setShow(false)}
          >
            about
          </Link>
          <div
            className={`${navLink} flex justify-center md:w-full md:justify-end md:items-center md:mr-0`}
          >
            <Link
              to="/contact"
              className="py-2 px-4 cursor-pointer text-white bg-purple-700 border-0 rounded-md tracking-wider shadow-lg transition-all ease-in-out duration-300 capitalize hover:shadow-xl md:py-1"
              onClick={() => setShow(false)}
            >
              contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

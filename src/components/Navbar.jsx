import React from "react";
import { useState } from "react";
import { Link } from "react-scroll";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import NavLink from "./NavLink";

const navLinks = [
  { title: "About", path: "#about" },
  { title: "Projects", path: "projects" },
  {
    title: "Contact",
    path: "contact",
  },
];

function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className=" items-center fixed lg:px-6 border border-slate-600 top-0 left-0 right-0 z-10 bg-opacity-90 bg-gray-800 justify-between m-auto py-4">
      <div className=" flex container  flex-wrap items-center justify-between mx-auto px-4 ">
        <Link
          to="hero"
          offset={-100}
          duration={1000}
          smooth={true}
          className="text-transparent bg-gradient-to-r from-white to-gray-400 bg-clip-text font-extrabold text-2xl sm:text-3xl  font-serif hover:underline hover:cursor-pointer shadow-lg inline-block"
        >
          Portfolio
        </Link>

        <div className="  mobile-menu md:hidden ">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-white hover:text-slate-500 hover:border-slate-500"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex  justify-center px-3 py-2 border rounded border-slate-200 text-white hover:text-slate-500 hover:border-slate-500"
            >
              <XMarkIcon className="h-5 w-5  " />
            </button>
          )}
        </div>

        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-6 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink to={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
}

export default Navbar;

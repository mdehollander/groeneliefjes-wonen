import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import data from '../content/navigation.json'

const navItems = data.map(({ href, label }) =>
     <li className="nav-item">
       <a className="mr-5 font-medium hover:text-gray-900" href={href}>{label}</a>
     </li>
);


export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="flex flex-wrap items-center justify-center pl-24 text-base md:ml-auto md:mr-auto">
          <div className="absolute top-0 right-0 z-50 block w-6 mt-8 mr-10 cursor-pointer select-none md:hidden sm:mt-10">
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <span className={(navbarOpen ? "hidden" : "flex")}><FontAwesomeIcon icon="bars" /></span>
              <span className={(navbarOpen ? "flex" : "hidden")}><FontAwesomeIcon icon="times" /></span>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              { navItems }
            </ul>
          </div>
      </nav>
    </>
  );
}

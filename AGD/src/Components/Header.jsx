import React from "react";
import {
  CloseIcon,
  Logo,
  MenuIcon,
  SearchIcon,
} from "../Constants/Icons.js";
import { NavLink } from "react-router-dom";
import { ListItems, MenuItems } from "../Constants/Header.js";
import { useMyContext } from "../Context/Context.jsx";

const Header = () => {
  const { open, setOpen } = useMyContext();

  return (
    <div className="bg-[#E7F66C]  w-full max-sm:h-20 h-28 px-5 relative z-50">
     <div className=" md:max-w-7xl mx-auto">
       <div className="flex items-center justify-between py-3">
        <Logo />

        <div className="hidden md:flex gap-5 items-center">
          <div className="flex items-center bg-white px-2 rounded-sm border max-w-xl w-80 h-10 gap-2">
            <SearchIcon className="w-4 h-4 text-black " />
            <input
              placeholder="Search Here"
              className="outline-none text-sm w-full text-gray-600"
            />
          </div>

          <nav className="flex gap-4">
            {MenuItems.map(({ id, Icon, path }) => (
              <NavLink key={id} to={path}>
                <Icon className="w-5 h-5" />
              </NavLink>
            ))}
          </nav>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden ">
          {open ? (
            <CloseIcon className="w-8 h-8" />
          ) : (
            <MenuIcon className="w-8 h-8" />
          )}
        </button>
      </div>

      {open && (
      <nav
  className="
    flex flex-col
    bg-white
    rounded-lg
    shadow-xl
    border border-gray-200
    cursor-pointer
    z-50
    absolute md:top-28 right-0
    w-52
    active:bg-amber-700 active:text-white
    transition-colors duration-200
    overflow-hidden
  "
>

          {ListItems.map(({ id, title, path }) => (
            <NavLink
              key={id}
              to={path}
              onClick={() => setOpen(false)}
              className="block px-4 py-3 border-b text-sm font-medium "

            >
              {title}
            </NavLink>
          ))}
        </nav>
      )}

      <nav className="hidden w-full md:flex flex-nowrap gap-6  justify-between scrollbar-hide overflow-x-auto scroll-smooth ">
        {ListItems.map(({ id, title, path }) => (
          <NavLink
            key={id}
            to={path}
            className="text-xs font-medium hover:border-b-2 whitespace-nowrap"
          >
            {title}
          </NavLink>
        ))}
      </nav>
     </div>
    </div>
  );
};

export default Header;

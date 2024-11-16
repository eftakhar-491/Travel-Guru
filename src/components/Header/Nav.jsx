import React from "react";
import { IoIosSearch } from "react-icons/io";
import logo from "../../assets/image/logo.png";
import { NavLink } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
function Nav() {
  return (
    <>
      <nav className="bg-transparent text-white py-4">
        <div className="relative w-11/12 lg:w-4/5 mx-auto gap-4 flex justify-between items-center">
          <div className="flex gap-4 items-center">
            <img src={logo} className="w-16 lg:w-24" alt="logo" />
            <form className="max-w-80 px-3 py-1 flex items-center rounded-md border-2 bg-[#FFFFFF33] border-white">
              <IoIosSearch className="scale-[1.3]" />
              <input
                placeholder="Search"
                className="outline-none pl-3 bg-transparent w-full"
                type="text"
              />
            </form>
          </div>

          <IoMenu className="lg:hidden scale-[1.6] cursor-pointer active:scale-[1.2]" />
          <div className="absolute lg:static lg:border-none lg:bg-transparent border-2 bg-[#FFFFFF33] py-3 right-0 rounded-md top-14 px-4 lg:flex gap-3 items-center">
            <ul className="flex flex-col lg:flex-row gap-4 items-center">
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive ? "underline font-extrabold" : ""
                }
              >
                <li className="text-sm font-semibold">Home</li>
              </NavLink>
              <NavLink
                to={"/news"}
                className={({ isActive }) =>
                  isActive ? "underline font-extrabold" : ""
                }
              >
                <li className="text-sm font-semibold">News</li>
              </NavLink>
              <NavLink
                to={"/destination"}
                className={({ isActive }) =>
                  isActive ? "underline font-extrabold" : ""
                }
              >
                <li className="text-sm font-semibold">Destination</li>
              </NavLink>
              <NavLink
                to={"/blog"}
                className={({ isActive }) =>
                  isActive ? "underline font-extrabold" : ""
                }
              >
                <li className="text-sm font-semibold">Blog</li>
              </NavLink>
            </ul>
            <button className="mt-3 lg:mt-0 lg:ml-4 ml-0 bg-[#F9A51A] w-full px-3 py-1 text-black text-sm rounded-sm font-semibold">
              Sign In
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;

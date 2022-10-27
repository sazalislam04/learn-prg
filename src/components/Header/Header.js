import React, { useContext, useState } from "react";
import {
  FaGraduationCap,
  FaMoon,
  FaSignInAlt,
  FaSignOutAlt,
  FaSun,
} from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const Header = () => {
  const [theme, setTheme] = useState(false);
  const [open, setOpen] = useState(false);

  const { user, userLogOut } = useContext(AuthContext);

  const hanldeLogOut = () => {
    userLogOut()
      .then(() => {})
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <header
      className={`py-2 shadow-md sticky top-0 z-10 ${
        theme ? "bg-gray-100 " : "bg-gray-900"
      }`}
    >
      <div className="container flex justify-between h-16 mx-auto px-6 lg:px-12">
        <Link
          rel="noopener noreferrer"
          to="/"
          aria-label="Back to homepage"
          className="flex items-center"
        >
          <FaGraduationCap className="w-12 h-12 text-blue-500" />
          <span
            className={`text-2xl ml-1 ${
              theme ? "text-gray-800" : "text-gray-100"
            }`}
          >
            LEARN<span className="text-blue-500 font-semibold">PRg</span>
          </span>
        </Link>
        <ul
          className={`items-stretch hidden space-x-3 font-medium lg:flex ${
            theme ? "text-gray-900" : "text-gray-100"
          }`}
        >
          <li className="flex">
            <NavLink
              rel="noopener noreferrer"
              to="/"
              className={`flex items-center px-4 ${({ isActive }) =>
                isActive ? "active" : undefined}`}
              end
            >
              Home
            </NavLink>
          </li>
          <li className="flex">
            <NavLink
              rel="noopener noreferrer"
              to="/courses"
              className={`flex items-center px-4 ${({ isActive }) =>
                isActive ? "active" : undefined}`}
            >
              Courses
            </NavLink>
          </li>
          <li className="flex">
            <NavLink
              rel="noopener noreferrer"
              to="/faq"
              className={`flex items-center px-4 ${({ isActive }) =>
                isActive ? "active" : undefined}`}
            >
              FAQ
            </NavLink>
          </li>
          <li className="flex">
            <NavLink
              rel="noopener noreferrer"
              to="/blog"
              className={`flex items-center px-4 ${({ isActive }) =>
                isActive ? "active" : undefined}`}
            >
              Blog
            </NavLink>
          </li>
        </ul>

        <div className="items-center flex-shrink-0 hidden lg:flex">
          <button className="mr-10 text-xl" onClick={() => setTheme(!theme)}>
            {theme ? (
              <FaSun className="text-gray-900 transition" />
            ) : (
              <FaMoon className="text-gray-100 transition" />
            )}
          </button>

          {user?.photoURL && (
            <div className="relative flex-shrink-0 mr-6">
              <span className="absolute bottom-0 right-0 w-4 h-4 bg-blue-600 border rounded-full text-gray-100 border-gray-900"></span>
              <img
                title={user?.displayName}
                src={user?.photoURL}
                alt=""
                className="w-12 h-12 border rounded-full dark:bg-gray-500 dark:border-gray-700 cursor-pointer"
              />
            </div>
          )}

          {user?.uid ? (
            <>
              <button
                title="Log Out"
                onClick={hanldeLogOut}
                className={theme ? "text-gray-900" : "text-white"}
              >
                <FaSignOutAlt className="ml-3 text-2xl" />
              </button>
            </>
          ) : (
            <Link to="/login">
              <button
                className={`self-center text-lg flex items-center px-4 py-2 
         text-blue-500 rounded bg-white border`}
              >
                Log in <FaSignInAlt className="ml-2" />
              </button>
            </Link>
          )}
        </div>

        <button onClick={() => setOpen(!open)} className="p-4 lg:hidden">
          {open ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-red-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 text-gray-100"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          )}
        </button>
      </div>

      {open && (
        <nav className="text-gray-100 text-center">
          <ul className="p-2 text-xl">
            <li className="p-5">
              <Link to="/">Home</Link>
            </li>
            <li className="p-5">
              <Link to="/courses">Courses</Link>
            </li>
            <li className="p-5">
              <Link to="/faq">Faq</Link>
            </li>
            <li className="p-5">
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;

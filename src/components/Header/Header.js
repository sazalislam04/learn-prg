import React, { useContext, useState } from "react";
import {
  FaGraduationCap,
  FaMoon,
  FaSignInAlt,
  FaSignOutAlt,
  FaSun,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const Header = () => {
  const [theme, setTheme] = useState(false);

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
      className={`py-2 shadow-md  ${theme ? "bg-gray-900 " : "bg-white"}`}
    >
      <div className="container flex justify-between h-16 mx-auto px-12">
        <Link
          rel="noopener noreferrer"
          to="/"
          aria-label="Back to homepage"
          className="flex items-center"
        >
          <FaGraduationCap className="w-12 h-12 text-blue-500" />
          <span
            className={`text-2xl ml-1 ${
              theme ? "text-white" : "text-gray-800"
            }`}
          >
            edu<span className="text-blue-500 font-semibold">-Skillup</span>
          </span>
        </Link>
        <ul
          className={`items-stretch hidden space-x-3 font-medium lg:flex ${
            theme ? "text-white" : "text-gray-800"
          }`}
        >
          <li className="flex">
            <Link
              rel="noopener noreferrer"
              to="/"
              className="flex items-center px-4 "
            >
              Courses
            </Link>
          </li>
          <li className="flex">
            <Link
              rel="noopener noreferrer"
              to="/faq"
              className="flex items-center px-4 "
            >
              FAQ
            </Link>
          </li>
          <li className="flex">
            <Link
              rel="noopener noreferrer"
              to="/blog"
              className="flex items-center px-4"
            >
              Blog
            </Link>
          </li>
        </ul>

        <div className="items-center flex-shrink-0 hidden lg:flex">
          <button className="mr-10 text-xl" onClick={() => setTheme(!theme)}>
            {theme ? (
              <FaMoon className="text-gray-100 transition" />
            ) : (
              <FaSun className="text-gray-900 transition" />
            )}
          </button>
          {user?.uid ? (
            <>
              <span className={theme ? "text-white" : "text-gray-900"}>
                <img
                  alt=""
                  className="w-8 h-8 rounded-full ring-1 ring-offset-1 cursor-pointer dark:bg-gray-500 ring-violet-400 ring-offset-gray-800"
                  src={user.photoURL}
                />
              </span>
              <button
                onClick={hanldeLogOut}
                className={theme ? "text-white" : "text-gray-900"}
              >
                <FaSignOutAlt className="ml-6" />
              </button>
            </>
          ) : (
            <>
              <Link to="/login">
                <button
                  className={`self-center text-lg flex items-center px-4 py-2 
         text-blue-500 rounded bg-white border`}
                >
                  Log in <FaSignInAlt className="ml-2" />
                </button>
              </Link>
            </>
          )}
        </div>
        <button className="p-4 lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 dark:text-gray-100"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;

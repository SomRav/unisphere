import React, { useState } from "react";
import { NavLink } from "react-router";

const MyNavbar = () => {
  const [searchInput, setSearchInput] = useState("");

  const handleOnInputChange = (e) => {
    // console.log(e.target.value);
    setSearchInput(e.target.value);
  };
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("Searching......:", searchInput);
    setSearchInput("");
  };
  return (
    <>
      <div className="navbar bg-base-100 shadow-sm ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {/* <!-- Nested menu --> */}
              {/* mobile search */}
              <li className="menu-title">
                <form className="flex gap-2 p-2" onSubmit={handleSearchSubmit}>
                  <input
                    type="text"
                    placeholder="Search..."
                    className="input input-bordered input-sm w-full"
                    onChange={handleOnInputChange}
                  />
                  <button type="submit" className="btn btn-square btn-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </button>
                </form>
              </li>
              {/* mobile search end */}
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/communities">Communities</NavLink>
                {/* <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul> */}
              </li>
              <li>
                <NavLink to="/resources">Resource</NavLink>
              </li>
              <li>
                <NavLink to="/events">Events</NavLink>
              </li>
            </ul>
          </div>
          <NavLink
            to="/"
            className=" font-sdfont  text-3xl font-bold tracking-wider 
             bg-gradient-to-r from-[#936ce7] to-[#47b2e7] 
             bg-clip-text text-transparent animate-pulse"
          >
            UniSphere
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/communities">Communities</NavLink>
            </li>
            {/* <li>
              <details>
                <summary>Communities</summary>
                <ul className="p-2">
                  <li>
                    <a>Thread 1</a>
                  </li>
                  <li>
                    <a>Thread 2</a>
                  </li>
                </ul>
              </details>
            </li> */}
            <li>
              <NavLink to="/resources">Resource</NavLink>
            </li>
            <li>
              <NavLink to="/events">Events</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-2">
          {/* search bar */}
          <form className="hidden lg:flex" onSubmit={handleSearchSubmit}>
            <div className="form-control">
              <div className="input-group flex items-stretch gap-2">
                <input
                  type="text"
                  placeholder="Search..."
                  className="input input-bordered input-sm"
                  value={searchInput}
                  onChange={handleOnInputChange}
                />
                <button className="btn btn-square btn-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </form>
          {/* profile */}
          {/* <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div> */}
          <button className="btn btn-ghost btn-circle" type="button">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
              <span className="inline-flex items-center justify-center w-4 h-4 status-warning rounded-full indicator-item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20px"
                  viewBox="0 -960 960 960"
                  width="20px"
                  fill="#000000"
                >
                  <path d="M479.79-144Q450-144 429-165.21t-21-51Q408-246 429.21-267t51-21Q510-288 531-266.79t21 51Q552-186 530.79-165t-51 21ZM408-384v-432h144v432H408Z" />
                </svg>
              </span>
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default MyNavbar;

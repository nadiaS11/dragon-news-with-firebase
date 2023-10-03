import React, { useContext } from "react";
import { Link } from "react-router-dom";
import userDefaultPic from "../../../assets/images/user.png";
import { AuthContext } from "../../../Router/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        console.log("user logged out");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const links = (
    <>
      <li>
        <a>Home</a>
      </li>

      <li>
        <a>About</a>
      </li>
      <li>
        <a>Career</a>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 mb-20">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow text-lg bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-lg">{links}</ul>
      </div>
      <div className="navbar-end">
        <img className="w-12 mr-4 rounded-full" src={userDefaultPic} alt="" />
        {!user ? (
          <Link
            to={"/login"}
            className="btn bg-[#403F3F] text-white font-semibold px-6 rounded"
          >
            Log in
          </Link>
        ) : (
          <Link
            onClick={handleLogOut}
            to={""}
            className="btn bg-[#403F3F] text-white font-semibold px-6 rounded"
          >
            Log out
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";
import logo from "D:/Full Stack Projects/Netflix Clone/Netflix_Frontend/ui/src/assets/logo.png";
import { FaBell, FaLanguage, FaCog, FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const AdminNavbar = () => {
  return (
    <>
      <div className="flex sticky z-50 items-center justify-between pl-6 pr-6 bg-slate-800">
        <Link to="/">
          <img className="h-20" src={logo} alt="Netflix" />
        </Link>
        <div>
          <ul className="flex gap-5">
            <li>
              <FaBell size={30} />
            </li>
            <li>
              <FaLanguage size={30} />
            </li>
            <li>
              <FaCog size={30} />
            </li>
            <li>
              <FaUserCircle size={30} />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default AdminNavbar;

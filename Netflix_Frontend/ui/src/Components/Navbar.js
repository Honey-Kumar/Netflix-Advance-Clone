import React, { useState, useEffect } from "react";
import { signOut } from "firebase/auth";
import { Authentication } from "../utils/firebase.config";
import swal from "sweetalert";
import {
  FaUser,
  FaBell,
  FaSearch,
  FaGifts,
  FaSignOutAlt,
} from "react-icons/fa";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [navshow, setnavshow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 100) {
        navshow === true ? setnavshow(false) : setnavshow(true);
      } else {
        setnavshow(false);
      }
    });
  }, []);
  const navigate = useNavigate();
  const Linklist = [
    { name: "Home", anchor: "/" },
    { name: "TV Shows", anchor: "/tv" },
    { name: "Movies", anchor: "/movies" },
    { name: "Latest", anchor: "/latest" },
    { name: "My List", anchor: "/mylist" },
  ];
  const iconlist = [
    { icon: <FaUser className="text-xl text-red-600" />, link: "/profile" },
    {
      icon: <FaSearch className="text-xl" />,
      link: "/search",
    },
    { icon: "KIDS", link: "/kids" },
    { icon: "DVD", link: "" },
    { icon: <FaGifts className="text-xl" />, link: "/offers" },
    { icon: <FaBell className="text-xl" />, link: " " },
    {
      icon: (
        <FaSignOutAlt
          onClick={() => {
            signOut(Authentication)
              .then(() => {
                navigate("/login");
                swal({
                  title: "Sign Out Successfull",
                  text: "You Have Sign Out From Netflix",
                  icon: "success",
                });
              })
              .catch((e) => {
                swal({
                  title: "Error Occured !",
                  text: e,
                  icon: "failed",
                });
              });
          }}
          className="text-xl text-red-600"
        />
      ),
      link: "",
    },
  ];
  return (
    <div
      className={`z-10 flex max-sm:flex-col max-sm:bg-black max-md:flex-col justify-between max-sm:justify-center items-center pl-2 pr-8 pt-4 sticky ${
        navshow === true ? `bg-slate-900` : ""
      }`}
    >
      <div className="flex max-sm:flex-col max-md:flex-col">
        <img src={logo} alt="Netflix Logo" className="h-12" />
        <div className="flex items-center max-sm:justify-between pl-0">
          <ul className="flex gap-4 text-l font-bold flex-wrap">
            {Linklist.map(({ name, anchor, key }) => {
              return (
                <li>
                  <Link to={anchor}>{name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div>
        <ul className="flex gap-4 items-center text-l font-bold flex-wrap">
          {iconlist.map(({ icon, link, key }) => {
            return (
              <li>
                <Link to={link}>{icon}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default Navbar;

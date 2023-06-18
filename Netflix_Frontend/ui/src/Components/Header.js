import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
import "../index.css";
import { AiOutlineGlobal } from "react-icons/ai";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Container className="flex items-center j-between pl-6 pr-6 md:flex-row lg:flex-row max-sm:flex-col">
        <Link to="/">
          <img src={logo} alt="Netflix" className="h-20" />
        </Link>
        <div className="flex gap-5">
          <button className="pl-5 pr-5 rounded h-9 bg-slate-900 border-2 font-bold flex items-center gap-2">
            <AiOutlineGlobal size={25} />
            <select id="language" className="outline-none bg-slate-900 w-full ">
              <option>English</option>
              <option>German</option>
              <option>Hindi</option>
              <option>Italian</option>
              <option>French</option>
              <option>Arabic</option>
            </select>
          </button>
          <Link to="/login">
            <button className="pl-5 pr-5 rounded h-9 max-sm:h-15 bg-red-600 font-bold ">
              Sign In
            </button>
          </Link>
        </div>
      </Container>
    </>
  );
};
const Container = styled.div`
width : 100vw,
height : 3rem,
`;
export default Header;

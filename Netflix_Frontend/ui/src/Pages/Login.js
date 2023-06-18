import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import Loginforms from "../Components/Loginforms";
import bgimage from '../assets/login.jpg'
import Footer from "../Components/Footer";

const Login = () => {
  return (
    <>
      <Container className="relative flex flex-col flex-grow">
        <img className="h-full" src={bgimage} alt="background"/>
        <div className=" content text-white w-full max-h-full flex flex-col">
          <Link to="/">
            <img src={logo} alt="Netflix" className="h-20" />
          </Link>
          <div className="flex justify-center mb-20">
            <Loginforms />
          </div>
          <Footer/>
        </div>
      </Container>
    </>
  );
};
const Container = styled.div`
  width: 100vw;
  height: 1200px;
  .content {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    background: linear-gradient(
      rgba(0, 0, 0, 0.8) 0,
      rgba(0, 0, 0, 0) 100%,
      rgba(0, 0, 0, 0.8) 100%
    );
  }
`;
export default Login;

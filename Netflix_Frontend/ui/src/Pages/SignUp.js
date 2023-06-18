import React from "react";
import styled from "styled-components";
import Header from "../Components/Header";
import Background from "../Components/Background";
import Showphase from "../Components/showphase";
import Footer from "../Components/Footer";
import Signupform from "../Components/signupform";
import bgimage from '../assets/login.jpg'


const SignUp = () => {
  return (
    <>
      <Container className="relative flex flex-grow">
        <Background image={bgimage} height='h-full'/>
        <div className=" content text-white w-full max-h-full flex flex-col gap-y-64 max-sm:gap-10">
          <Header />
          <Signupform />
        </div>
      </Container>
      <div className="bg-blue-600 h-2"></div>
      <Showphase
        tittle="Enjoy on your TV"
        para="Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."
        src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
        dir="false"
      />
      <div className="bg-blue-600 h-2"></div>

      <Showphase
        src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
        tittle="Download your shows to watch offline"
        para="Save your favourites easily and always have something to watch."
        dir="true"
      />
      <div className="bg-blue-600 h-2"></div>

      <Showphase
        tittle="Watch everywhere"
        para="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
        src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png"
        dir="false"
      />
      <div className="bg-blue-600 h-2"></div>

      <Showphase
        tittle="Create profiles for kids"
        para="Send children on adventures with their favourite characters in a space made just for them—free with your membership."
        src="https://occ-0-2991-2164.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png?r=54d"
        dir="true"
      />
      <div className="bg-blue-600 h-2"></div>
      <Footer />
    </>
  );
};
const Container = styled.div`
  width: 100vw;
  height: 900px;
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
export default SignUp;

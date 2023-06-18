import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Background from "../Components/Background";
import Moviedetail from "../Components/Moviedetail";
import axios from "axios";
import { API_URL, request } from "../Store/Requestdata";
import style from "styled-components";
import ComboMovie from "../Components/ComboMovie";
import Footer from "../Components/Footer";

const TvShows = () => {
  const [tv, settv] = useState([]);
  useEffect(() => {
    const movfetch = async () => {
      const responsedata = await axios.get(
        `${API_URL}${request.NetflixOriginal}`
      );
      console.log(responsedata);
      settv(responsedata.data.results[Math.floor(Math.random() * 20)]);
      console.log(tv);
    };
    movfetch();
  }, []);
  return (
    <Container>
      <div className="brightness-100 h-screen">
        <Background
          image={`https://image.tmdb.org/t/p/original/${tv?.backdrop_path}`}
          height="h-screen"
        />
        <div className="content absolute top-0 left-0 right-0">
          <Navbar />
        </div>
        <div className="w-full absolute bottom-0 left-0 right-0 max-sm:top-1/2">
          <Moviedetail
            desc={tv?.overview}
            name={tv?.title || tv?.original_name}
          />
        </div>
        <div className="p-2">
          <ComboMovie
            fetchurl={`${API_URL}${request.NetflixOriginal}`}
            heading="TV Shows"
          />
        </div>
        <Footer />
      </div>
    </Container>
  );
};

const Container = style.div`
width = 100vw;
height = 100vh;
.content{
  background: linear-gradient(
    rgba(0, 0, 0, 0.8) 0,
    rgba(0, 0, 0, 0.1) 100%,
    rgba(0, 0, 0, 0.8) 100%
  );
}
`;

export default TvShows;

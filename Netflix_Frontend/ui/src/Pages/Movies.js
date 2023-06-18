import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Background from "../Components/Background";
import Moviedetail from "../Components/Moviedetail";
import axios from "axios";
import { API_URL, API_KEY, request } from "../Store/Requestdata";
import { styled } from "styled-components";
import ComboMovie from "../Components/ComboMovie";
import Footer from "../Components/Footer";

const Movies = () => {
  const [mov, setmov] = useState([]);
  useEffect(() => {
    const movfetch = async () => {
      const responsedata = await axios.get(`${API_URL}${request.TopActions}`);
      console.log(responsedata);
      setmov(responsedata.data.results[Math.floor(Math.random() * 20)]);
      console.log(mov);
    };
    movfetch();
  }, []);
  return (
    <Container>
      <div className="brightness-100 h-screen">
        <Background
          image={`https://image.tmdb.org/t/p/original/${mov?.backdrop_path}`}
          height="h-screen"
        />
        <div className="content absolute top-0 left-0 right-0">
          <Navbar />
        </div>
        <div className="w-full absolute bottom-0 left-0 right-0 max-sm:top-1/2">
          <Moviedetail
            desc={mov?.overview}
            name={mov?.title || mov?.original_title}
          />
        </div>
        <div>
          <ComboMovie
            fetchurl={`${API_URL}${`/search/tv?api_key=${API_KEY}&language=en-US&page=1&query=${`talent`}&include_adult=false`}`}
            heading="Talent Shows"
          />
          <ComboMovie
            fetchurl={`${API_URL}${request.upcomming}`}
            heading="Upcomming Movies"
          />
          <ComboMovie
            fetchurl={`${API_URL}${request.Western}`}
            heading="Special Western Movies"
          />
          <ComboMovie
            fetchurl={`${API_URL}${request.Trending}`}
            heading="Trending Movies"
          />
          <ComboMovie
            fetchurl={`${API_URL}${request.NetflixOriginal}`}
            heading="Netflix Original Series"
          />
          <ComboMovie
            fetchurl={`${API_URL}${request.Toprated}`}
            heading="Top Rated Series"
          />
          <ComboMovie
            fetchurl={`${API_URL}${request.TopActions}`}
            heading="Action Movies "
          />
          <ComboMovie
            fetchurl={`${API_URL}${request.Comedy}`}
            heading="Comedy"
          />
          <ComboMovie
            fetchurl={`${API_URL}${request.Horrow}`}
            heading="Horror Movies"
          />
          <ComboMovie
            fetchurl={`${API_URL}${`/search/tv?api_key=${API_KEY}&language=en-US&page=1&query=${`Hindi`}&include_adult=false`}`}
            heading="Talent Shows"
          />
        </div>
        <Footer />
      </div>
    </Container>
  );
};

const Container = styled.div`
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

export default Movies;

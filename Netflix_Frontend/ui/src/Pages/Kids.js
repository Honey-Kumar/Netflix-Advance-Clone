import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Background from "../Components/Background";
import Moviedetail from "../Components/Moviedetail";
import axios from "axios";
import { API_URL, API_KEY, request } from "../Store/Requestdata";
import ComboMovie from "../Components/ComboMovie";
import styled from "styled-components";
import Footer from "../Components/Footer";

const Kids = () => {
  const [kiddata, setkiddata] = useState([]);
  useEffect(() => {
    const fetchkids = async () => {
      const response = await axios.get(`${API_URL}${request.kids}`);
      console.log(response);
      setkiddata(response.data.results[Math.floor(Math.random() * 20)]);
    };
    fetchkids();
  }, []);
  return (
    <Container>
      <div className="brightness-100 h-screen">
        <Background
          image={`https://image.tmdb.org/t/p/original/${kiddata?.backdrop_path}`}
          height="h-screen"
        />
        <div className="content absolute top-0 left-0 right-0">
          <Navbar />
        </div>
        <div className="w-full absolute bottom-0 left-0 right-0 max-sm:top-1/2">
          <Moviedetail
            desc={kiddata?.overview || kiddata.name}
            name={kiddata?.title || kiddata?.original_title || kiddata.name}
          />
        </div>
        <div className="p-2">
          <ComboMovie
            fetchurl={`${API_URL}${request.kids}`}
            heading="Animations"
          />
          <ComboMovie
            fetchurl={`${API_URL}${`/search/tv?api_key=${API_KEY}&language=en-US&page=1&query=${`Cartoons`}&include_adult=false`}`}
            heading="Cartoons"
          />
          <ComboMovie
            fetchurl={`${API_URL}${`/search/tv?api_key=${API_KEY}&language=en-US&page=1&query=${`Toons`}&include_adult=false`}`}
            heading="Popular Toons"
          />
          <ComboMovie
            fetchurl={`${API_URL}${`/search/tv?api_key=${API_KEY}&language=en-US&page=1&query=${`Pokemon`}&include_adult=false`}`}
            heading="Animations"
          />
          <ComboMovie
            fetchurl={`${API_URL}${`/search/tv?api_key=${API_KEY}&language=en-US&page=1&query=${`Game`}&include_adult=false`}`}
            heading="Games"
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
export default Kids;

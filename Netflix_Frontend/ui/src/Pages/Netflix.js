import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Background from "../Components/Background";
import style from "styled-components";
import Moviedetail from "../Components/Moviedetail";
import axios from "axios";
import { API_URL, API_KEY, request } from "../Store/Requestdata";
import ComboMovie from "../Components/ComboMovie";
import Footer from "../Components/Footer";

const Netflix = () => {
  const [moviedata, setmoviedata] = useState({});
  useEffect(() => {
    const fetchmovie = async () => {
      const responsedata = await axios.get(`${API_URL}${request.Trending}`);
      setmoviedata(responsedata.data.results[Math.floor(Math.random() * 20)]);
    };
    fetchmovie();
  }, []);
  return (
    <Container>
      <div className="brightness-100 h-screen">
        <Background
          image={`https://image.tmdb.org/t/p/original/${moviedata?.backdrop_path || moviedata.backdrop_path}`}
          height="h-screen"
        />
        <div className="content absolute top-0 left-0 right-0">
          <Navbar />
        </div>
        <div className="w-full absolute bottom-0 left-0 right-0 max-sm:top-1/2">
          <Moviedetail
            desc={moviedata?.overview}
            name={
              moviedata?.title || moviedata?.original_title || moviedata?.name
            }
            image={`https://image.tmdb.org/t/p/original/${moviedata?.backdrop_path}`}
            data={moviedata}
          />
        </div>
        <div className="p-1 ">
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
            fetchurl={`${API_URL}${request.Documentries}`}
            heading="Documentries"
          />
          <ComboMovie
            fetchurl={`${API_URL}${request.Romance}`}
            heading="Romance Movies"
          />
          <ComboMovie
            fetchurl={`${API_URL}${request.kids}`}
            heading="Animations"
          />
          <ComboMovie
            fetchurl={`${API_URL}${request.Drama}`}
            heading="Popular Dramas"
          />
          <ComboMovie fetchurl={`${API_URL}${request.News}`} heading="News" />
          <ComboMovie
            fetchurl={`${API_URL}${request.Music}`}
            heading="Popular Music"
          />
          <ComboMovie
            fetchurl={`${API_URL}${request.Thriller}`}
            heading="New Thrillers"
          />
          <ComboMovie
            fetchurl={`${API_URL}${request.Crime}`}
            heading="Crime Story"
          />
          <ComboMovie
            fetchurl={`${API_URL}${request.Mystery}`}
            heading="Mystery Movies"
          />
          <ComboMovie
            fetchurl={`${API_URL}${request.Politics}`}
            heading="War & Politics"
          />
          <ComboMovie
            fetchurl={`${API_URL}${request.Talk}`}
            heading="Popular Talks"
          />
          <ComboMovie
            fetchurl={`${API_URL}${request.Soap}`}
            heading="Popular Soap"
          />
          <ComboMovie
            fetchurl={`${API_URL}${request.SciFantasy}`}
            heading="Popular Science and Fantasy"
          />
          <ComboMovie
            fetchurl={`${API_URL}${request.Western}`}
            heading="Special Western Movies"
          />
          <ComboMovie
            fetchurl={`${API_URL}${request.gameshow}`}
            heading="Game Show"
          />
          <ComboMovie
            fetchurl={`${API_URL}${request.upcomming}`}
            heading="Upcomming Movies"
          />
          <ComboMovie
            fetchurl={`${API_URL}${`/search/tv?api_key=${API_KEY}&language=en-US&page=1&query=${`talent`}&include_adult=false`}`}
            heading="Talent Shows"
          />
          <ComboMovie
            fetchurl={`${API_URL}${request.hindi}`}
            heading="Hindi Movies"
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
export default Netflix;

import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Background from "../Components/Background";
import movieimage from "../assets/home.jpg";
import style from "styled-components";
import axios from "axios";
import { FaCheckCircle, FaHeart } from 'react-icons/fa'
import Moviedetail from "../Components/Moviedetail";
import { useParams } from "react-router-dom";
import { API_KEY, API_URL, YTAPI_KEY, YTAPI_URL } from "../Store/Requestdata";
import MediaCard from "../Components/MediaCard";
import Footer from "../Components/Footer";

const MovieInfomation = (props) => {
  const { id } = useParams();
  console.log(id);
  const [moviedetail, setmoviedetail] = useState([]);
  const [recomendedmovie, setrecomendedmovie] = useState([]);
  const [changecolor, setchangecolor] = useState(`text-white`);
  useEffect(() => {
    const fetchdetails = async () => {
      const result = await axios.get(
        `${API_URL}/movie/${id}?api_key=${API_KEY}&append_to_response=credits`
      );
      console.log(result);
      setmoviedetail(result.data);

      const name = moviedetail?.belongs_to_collection?.map(async (e) => {
        const recomend = await axios.get(
          `${API_URL}/movie/${e.id}?api_key=${API_KEY}&append_to_response=credits`
        );
        console.log(recomend);
      })


    };
    fetchdetails();
  }, []);

  return (
    <Container>
      <div className="brightness-100 h-screen">
        <Background
          image={`https://image.tmdb.org/t/p/original/${moviedetail?.backdrop_path || moviedetail.backdrop_path}`}
          height="h-screen"
        />
        <div className="content absolute top-0 left-0 right-0">
          <Navbar />
        </div>
        <div className="w-full absolute bottom-0 left-0 right-0 max-sm:top-1/2">
          <Moviedetail
            desc={moviedetail?.overview}
            name={
              moviedetail?.title ||
              moviedetail?.original_title ||
              moviedetail?.name
            }
            image={`https://image.tmdb.org/t/p/original/${moviedetail?.backdrop_path || moviedetail.backdrop_path}`}
            data={moviedetail}
          />
          <div className="bg-red-600 flex items-center gap-4 p-1">
            <button className="bg-green-600 pl-3 pr-3 pt-3 pb-3 ml-3 rounded flex items-center justify-center gap-2"><FaCheckCircle />{`${moviedetail?.status}`}</button>
            <span className="font-bold">{`Budget - ${moviedetail.budget}`}</span>
            <span className="font-bold">{`Revenue - ${moviedetail.revenue}`}</span>
            <li className="list-none font-bold">{` Speaking-Language - ${moviedetail.spoken_languages?.map((e) => e.name)}`}</li>
            <FaHeart size={30} className={` ${changecolor}`} onClick={() => {
              changecolor === `text-white` ? setchangecolor(`text-green-600`) : setchangecolor(`text-white`)
            }} />
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-4xl pt-3 ml-3 mb-3 max-sm:text-2xl font-bold">Movie Cast Actor and Actress</h2>
        <div className="flex flex-wrap gap-5 pt-4 justify-center">
          {
            moviedetail.credits?.cast?.map((e) =>
              e.profile_path ? (<MediaCard
                poster_path={e.profile_path}
                backdrop_path={e.profile_path}
                name={e.original_name}
                original_name={e.original_name}
                title={e.original_name}
                overview={e.name}
              />

              ) : (" ")
            )
          }
        </div>

        <h2 className="text-4xl pt-3 ml-3 mb-3 max-sm:text-2xl font-bold">Movie Crew</h2>
        <div className="flex flex-wrap gap-5 pt-4 justify-center">
          {
            moviedetail.credits?.crew?.map((e) =>
              e.profile_path ? (<MediaCard
                poster_path={e.profile_path}
                backdrop_path={e.profile_path}
                name={e.original_name}
                original_name={e.original_name}
                title={e.original_name}
                overview={e.name}
              />

              ) : (" ")
            )
          }
        </div>

        <h2 className="text-4xl pt-3 ml-3 mb-3 max-sm:text-2xl font-bold">Production Companies</h2>
        <div className="flex flex-wrap justify-around pt-4 pl-4 pr-4 pb-5">
          {
            moviedetail.production_companies?.map((e) =>
              e.logo_path ? (
                <MediaCard
                  poster_path={e.logo_path}
                  backdrop_path={e.logo_path}
                  name={e.name}
                  original_name={e.name}
                  title={e.origin_country}
                  overview={e.name}
                />
              ) : (" ")
            )
          }
        </div>
      </div>
      <h2 className="text-4xl pt-3 ml-3 mb-3 max-sm:text-2xl font-bold">Recommended Videos</h2>
      <div>

      </div>
      <Footer />
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
export default MovieInfomation;

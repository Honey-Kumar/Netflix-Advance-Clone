import axios from "axios";
import React, { useState } from "react";
import { API_KEY, API_URL, request } from "../Store/Requestdata";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import MediaCard from "./MediaCard";

const ComboMovie = (props) => {
  const [listdata, setlistdata] = useState([]);
  const [loading, setloading] = useState(false);
  const navigate = useNavigate();
  useState(() => {
    const datafetching = async () => {
      const responsedata = await axios.get(props.fetchurl);
      setlistdata(responsedata.data.results);
    };
    datafetching();
  }, []);
  console.log(listdata);
  return (
    <Container>
      <h2 className="text-4xl ml-3 mb-3 max-sm:text-2xl font-bold">{props.heading}</h2>
      <div className="flex gap-8 overflow-x-scroll rounded scroll-smooth pt-5">
        {listdata?.map((e) =>
          e.backdrop_path || e.poster_path ? (
            <Link to={`/movieinformation/${e.id}`}>
              <MediaCard
                poster_path={e.poster_path}
                backdrop_path={e.backdrop_path}
                name={e.name}
                original_name={e.original_name}
                title={e.title}
                overview={e.overview}
              />
            </Link>
          ) : (
            ""
          )
        )}
      </div>
    </Container>
  );
};

export const Container = styled.div`
  padding-top: 1rem;
  .image {
    width: 100%;
    height: 300px;
  }
`;

export default ComboMovie;

/*
<img
                className="h-96 w-3/4 hover:scale-125 ease-linear duration-200 z-10 cursor-pointer"
                src={`https://image.tmdb.org/t/p/original/${
                  e.poster_path || e.backdrop_path
                }`}
                alt={e?.name || e?.original_name || e?.title}
              />
*/

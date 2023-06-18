import React from "react";
import { FaPlay, FaInfoCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import MovieInfomation from "../Pages/MovieInfomation";

const Moviedetail = (props) => {
  const navigate = useNavigate();
  let detail = `${props.desc}`;
  return (
    <Container className="content flex flex-wrap max-sm:flex-nowrap flex-col gap-4 max-sm:gap-1 p-4 overflow-auto">
      <h1 className="text-3xl max-sm:text-xl font-bold">
        {props.name || props.original_name}
      </h1>
      <p className="text-xl max-sm:text-l overflow-hidden">
        {detail.length >= 150 ? detail.substring(0, 150) + "...." : detail}
      </p>
      <div className="flex gap-4">
        <button className="flex items-center gap-2 pl-6 pr-6 rounded h-12 max-sm:h-15 bg-red-600 font-bold ">
          <FaPlay />
          Play
        </button>
        {/* <button
          onClick={() => {
            navigate(`/movieinformation/${props.id}`);
          }}
          className="flex items-center gap-2 pl-6 pr-6 rounded h-12 max-sm:h-15 bg-gray-900/50 font-bold "
        >
          <FaInfoCircle />
          More Info
        </button> */}
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  max-height: 16rem;
  background: linear-gradient(
    rgba(0, 0, 0, 0.8) 0,
    rgba(0, 0, 0, 0.1) 100%,
    rgba(0, 0, 0, 0.8) 100%
  );
`;
export default Moviedetail;

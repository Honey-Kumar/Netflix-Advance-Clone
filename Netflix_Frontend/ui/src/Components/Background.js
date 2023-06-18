import React, { useState } from "react";
import Styled from "styled-components";
import { Triangle } from "react-loader-spinner";

const Background = (props) => {
  return (
    <Container>
      <img
        src={props.image}
        alt="Background"
        className={`w-screen ${props.height} bg-cover`}
      />
    </Container>
  );
};
const Container = Styled.div`
 width = 100vw;
 height = 100%;
`;
export default Background;

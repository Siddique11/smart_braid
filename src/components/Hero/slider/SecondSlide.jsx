import React from "react";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  inset: 0;

  & > img {
    object-position: left top;
    width: 100vw;
    height: 93.3vh;
    object-fit: cover;
  }
`;

const SecondSlider = () => {
  return (
    <Div>
      <img
        src="https://www.sensationnel.com/wp-content/uploads/slider_072021_RUWA_bg_01.jpg"
        alt="Second"
      />
    </Div>
  );
};

export default SecondSlider;

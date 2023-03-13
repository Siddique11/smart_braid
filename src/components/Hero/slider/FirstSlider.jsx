import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import {
  imageAnimation1,
  pageAnimation1,
  productAnimation1,
} from "./animation";

const Div = styled(motion.div)`
  display: flex;
  inset: 0;

  & > img {
    object-position: left -200px;
    width: 100vw;
    height: 93.3vh;
    object-fit: cover;
  }
`;

const TopDiv = styled(motion.div)`
  position: relative;

  & > img {
    position: absolute;
    width: 30rem;
    height: 30rem;
    z-index: 1000;
    left: 28rem;
    top: 35%;
    transform: translateY(-50%);
    /* box-shadow: 10px 5px 5px gray; */
  }
`;

const FirstSlider = () => {
  return (
    <Div variants={pageAnimation1} initial="hidden" animate="show">
      <TopDiv>
        <motion.img
          variants={productAnimation1}
          src="https://www.sensationnel.com/wp-content/uploads/slider_072021_RUWA_01.png"
          alt=""
        />
      </TopDiv>
      <>
        <motion.img
          variants={imageAnimation1}
          src="https://www.sensationnel.com/wp-content/uploads/slider_072021_RUWA_bg_02-2.jpg"
          alt="First"
        />
      </>
    </Div>
  );
};

export default FirstSlider;

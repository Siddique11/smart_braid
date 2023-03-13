import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { imageAnimation1, pageAnimation } from "./animation";

const Div = styled(motion.div)`
  display: flex;
  inset: 0;
  background-color: red;

  & > img {
    object-position: left top;
    width: 100vw;
    height: 93.3vh;
    object-fit: cover;
  }
`;

const ThirdSlider = () => {
  return (
    <Div variants={pageAnimation} initial="hidden" animate="show">
      <motion.img
        variants={imageAnimation1}
        src="https://www.sensationnel.com/wp-content/uploads/Braid_1.png"
        alt="Third"
      />
    </Div>
  );
};

export default ThirdSlider;

import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import data from "../../Data";

import FirstSlider from "./slider/FirstSlider";
import SecondSlider from "./slider/SecondSlide";
import ThirdSlider from "./slider/ThirdSlider";
import "./style.css";

// const Div = styled.div`
//   display: flex;
//   inset: 0;

//   & img {
//     object-position: left top;
//     width: 100vw;
//     height: 93.3vh;
//     object-fit: cover;
//   }
// `;

const Hero = () => {
  // end of animation
  const [index, setIndex] = useState(0);

  // console.log(data.length);

  const arraySlider = [<FirstSlider />, <SecondSlider />, <ThirdSlider />];

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(checkNumber(index + 1));
    }, 5000);
    return () => clearInterval(slider);
  }, [index]);

  const checkNumber = (number) => {
    if (number > data.length - 1) {
      return 0;
    }
    if (number < 0) {
      return data.length - 1;
    }

    return number;
  };

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };
  return (
    // <div className="container">
    //   <header className="header"></header>
    // </div>

    <div className="carousel">
      <button className="carousel-button prev-btn" onClick={prevPerson}>
        <FaChevronLeft size={"4rem"} />
      </button>
      <button className="carousel-button next-btn" onClick={nextPerson}>
        <FaChevronRight size={"4rem"} />
      </button>
      <>{arraySlider[index]}</>
    </div>
  );
};

export default Hero;

import React from "react";
import Slider from "react-slick";
import styles from "../styles/About.module.css";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Testmonialcard, TypographyText } from "../Reuse/Reuse";
const Testmonials = () => {
  const isSmallScreen = useMediaQuery("(max-width:769px)");
  return (
    <div id='testmonials'>
         <TypographyText
              Typography={"Achievements and Certificates"}
              color="#f4af1b"
              variant={!isSmallScreen ? "h2" : "h5"}
            />
    <Slider {...settings}>
      {Data.map((data, index) => (
     <Testmonialcard  key={index}
     image={data.image}/>
    
     
      ))}
    </Slider>
  </div>
  );
};

export default Testmonials;

const Data = [
   {
    image: '/bestteam.jpeg',
  },
  {
    image: '/achiv.jpg',
  },
  {
    image: '/Best.jpeg'
  },
];

const settings = {
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,

  
};

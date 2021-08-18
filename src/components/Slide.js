import React from "react";
import { Carousel } from "react-bootstrap";

const Slide = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item interval={6000}>
          <img
            className="d-block w-100"
            src="./images/add.png"
            alt="First slide"
          />
         
        </Carousel.Item>
        <Carousel.Item interval={6000}>
          <img
            className="d-block w-100"
            src="./images/Biggest.png"
            alt="Second slide"
          />
         
        </Carousel.Item>
        <Carousel.Item interval={6000}>
          <img
            className="d-block w-100"
            src="./images/add.png"
            alt="Third slide"
          />
         
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Slide;

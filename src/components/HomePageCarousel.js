import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import Carousel1 from '../assets/carousel1.jpg';
import Carousel2 from '../assets/carousel2.jpg';



function HomePageCarousel(){
  const carouselStyle = {
   width: "100%",
   height: 700
  }

  const carouselImage= {
    width: "100%",
    height: "100%"
    
  }

    return(
    
        <Carousel>
      <Carousel.Item style={carouselStyle}>
        <img
          className="d-block w-100" style={carouselImage}
          src={Carousel1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Първо кафето. После плановете.</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item style={carouselStyle}>
        <img
          className="d-block w-100" style={carouselImage}
          src={Carousel2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Животът е кратък, наслади се на кафето си!</h3>
        </Carousel.Caption>
      </Carousel.Item>
      </Carousel>
     
    );
}
export default HomePageCarousel;
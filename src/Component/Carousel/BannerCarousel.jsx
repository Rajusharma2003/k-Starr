/* eslint-disable no-unused-vars */
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';

import Banner1 from '../../Images/Banner2.jpg';
import Banner5 from '../../Images/54.jpg';

function CarouselFadeExample() {
  return (
    <div className="relative "> {/* Set the height of the full div to the full viewport height */}
      <Carousel fade className="relative h-full overflow-hidden">
        <Carousel.Item className="relative  lg:h-[85vh]">
          <img
            className="d-block w-full h-full object-fill"
            src={Banner1}
            alt="First slide"
          />
        </Carousel.Item>

        <Carousel.Item className="relative h-full">
          <img
            className="d-block w-full md:h-full  lg:h-[85vh] object-fill"
            src={Banner5}
            alt="Second slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselFadeExample;

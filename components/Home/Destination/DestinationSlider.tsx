"use client";
import { destinationData } from "@/data/data";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 992 },
    items: 5,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 992, min: 764 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const DestinationSlider = () => {
  return (
    <Carousel
      responsive={responsive}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={3000}
      keyBoardControl={true}
    >
      {destinationData.map((item) => (
        <div key={item.id} className="destinationSliderItem">
          <figure className="destinationSliderItemContainer">
            <div className="overlaySliderImage"></div>
            <img src={item.image} alt={item.country} className="sliderImage" />
          </figure>

          <figcaption className="destinationSliderItemText">
            <h3 className="destinationSliderItemTextH3">{item.country}</h3>
            <p className="destinationSliderItemTextP">
              {item.travelers} travelers
            </p>
          </figcaption>
        </div>
      ))}
    </Carousel>
  );
};

export default DestinationSlider;

import React from "react";
import Hero from "./Hero/Hero";
import Destination from "./Destination/Destination";
import Hotel from "./Hotel/Hotel";
import WhyChoose from "./Whychoose/WhyChoose";
import Reviews from "./Reviews/Reviews";
import News from "./News/News";
import NewsLetter from "./NewsLetter/NewsLetter";

const HomeComponent = () => {
  return (
    <div className="homeComp">
      <Hero />
      <Destination />
      <Hotel />
      <WhyChoose />
      <Reviews />
      <News />
      <NewsLetter />
    </div>
  );
};

export default HomeComponent;

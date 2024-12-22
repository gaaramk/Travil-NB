"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import { reviewData } from "@/data/data";
import { FaStar } from "react-icons/fa";
import Image from "next/image";

const ReviewsSlider = () => {
  return (
    <div>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="reviewsSlider"
      >
        {reviewData.map((item) => {
          return (
            <SwiperSlide key={item.id} className="reviewsSliderItem">
              <div className="reviewsSliderItemContainer">
                {/* review text */}
                <p className="reviewsSliderItemText">{item.review}</p>

                {/* icon */}
                <div className="reviewsSliderItemIcon">
                  <FaStar className="reviewsSliderItemIconStar" />
                  <FaStar className="reviewsSliderItemIconStar" />
                  <FaStar className="reviewsSliderItemIconStar" />
                  <FaStar className="reviewsSliderItemIconStar" />
                  <FaStar className="reviewsSliderItemIconStar" />
                </div>

                {/* user profile */}
                <div className="reviewsSliderItemProfile">
                  <div className="reviewsSliderItemProfileContainer">
                    <Image
                      src={item.image}
                      alt="client"
                      width={60}
                      height={60}
                      className="reviewsSliderItemProfileImage"
                    />

                    <div>
                      <p className="reviewsSliderItemProfileName">
                        {item.name}
                      </p>
                      <p className="reviewsSliderItemProfileJob">Web Developer</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default ReviewsSlider;

import React from "react";
import { FaStar } from "react-icons/fa";
import ReviewsSlider from "./ReviewsSlider";

const Reviews = () => {
  return (
    <section className="reviews">
      <div className="reviewsContainer">
        {/* text content */}
        <div className="reviewsText">
          <h1 className="reviewsH1">What our customers are saying about us?</h1>
          <p className="reviewsP">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae,
            omnis at animi repellat impedit suscipit sapiente rerum!
          </p>

          {/* rating */}
          <div className="reviewsRating">
            <div className="">
              <p className="reviewsRatingP">4.88</p>
              <p className="reviewsRatingOverall">Overall Rating</p>
              <div className="reviewsRatingStars">
                <FaStar className="reviewsRatingStar" />
                <FaStar className="reviewsRatingStar" />
                <FaStar className="reviewsRatingStar" />
                <FaStar className="reviewsRatingStar" />
                <FaStar className="reviewsRatingStar" />
              </div>
            </div>
          </div>
        </div>

        {/* slider */}
        <div className="reviewsSlider">
          <ReviewsSlider />
        </div>
      </div>
    </section>
  );
};

export default Reviews;

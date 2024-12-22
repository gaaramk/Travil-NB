import Image from "next/image";
import { FaHeart } from "react-icons/fa";

type Props = {
  hotel: {
    id: number;
    image: string;
    name: string;
    location: string;
    rating: number;
    reviews: string;
    price: string;
  };
};

const HotelCardContent = ({ hotel }: Props) => {
  return (
    <div>
      <div className="hotelCardContent group">
        {/* add to wishlist */}
        <div className="hotelCardWishlist">
          <FaHeart className="hotelCardHeart" />
        </div>

        {/* overlay */}
        <div className="hotelCardOverlay"></div>

        {/* image */}
        <Image
          src={hotel.image}
          alt={hotel.name}
          width={500}
          height={500}
          className="hotelCardImage group-hover:scale-110"
        />
      </div>

      {/* card content */}
      <div>
        <h1 className="hotelCardName">{hotel.name}</h1>
        <p className="hotelCardLocation">{hotel.location}</p>
      </div>

      {/* rating */}
      <div className="hotelCardRating">
        <div className="hotelCardRatingContainer">{hotel.rating}</div>
        <p className="hotelCardRatingText">Exceptional</p>
        <p className="hotelCardReviews">{hotel.reviews} reviews</p>
      </div>

      {/* price */}
      <div className="hotelCardPrice">
        <p className="hotelCardPriceText">
          Starting from{" "}
          <span className="hotelCardPriceTextSpan">US${hotel.price}</span>
        </p>
      </div>
    </div>
  );
};

export default HotelCardContent;

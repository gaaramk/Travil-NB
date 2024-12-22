import HeadingSection from "@/components/Helper/HeadingSection";
import { hotelsData } from "@/data/data";
import HotelCardContent from "./HotelCardContent";

const Hotel = () => {
  return (
    <section className="hotelSection">
      {/* heading */}
      <HeadingSection heading="Recommended Hotels" />

      <div className="hotelSectionContent">
        {/* hotels card */}
        {hotelsData.map((item) => (
          <div key={item.id}>
            <HotelCardContent hotel={item} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hotel;

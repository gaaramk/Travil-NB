import HeadingSection from "@/components/Helper/HeadingSection";
import DestinationSlider from "./DestinationSlider";

const Destination = () => {
  return (
    <section className="destination">
      {/* heading */}
      <HeadingSection heading="Explring Popular Destinations" />

      {/* content */}
      <div className="destinationContent">
        {/* slider */}
        <DestinationSlider />
      </div>
    </section>
  );
};

export default Destination;

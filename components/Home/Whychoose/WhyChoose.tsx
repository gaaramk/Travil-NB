import HeadingSection from "@/components/Helper/HeadingSection";
import WhyChooseCard from "./WhyChooseCard";

const WhyChoose = () => {
  return (
    <section className="whyChoose">
      {/* heading */}
      <HeadingSection heading="Why Choose Us" />

      <div className="whyChooseContent">
        {/* why choose card */}
        <div>
          <WhyChooseCard image="/images/c1.svg" title="Best Price Guarantee" />
        </div>

        <div>
          <WhyChooseCard image="/images/c2.svg" title="Easy & Quick Booking" />
        </div>

        <div>
          <WhyChooseCard image="/images/c3.svg" title="Customer Care 24/7" />
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;

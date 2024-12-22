import SearchBox from "@/components/Helper/SearchBox";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="hero">
      {/* overlay */}
      <div className="overlayHero"></div>

      {/* video */}
      <video
        src={`images/hero1.mp4`}
        autoPlay
        muted
        loop
        preload="metadata"
        className="heroVideo"
      ></video>

      {/* text */}
      <div className="heroText">
        <div className="heroTextContainer">
          <div>
            <h1 className="heroTextH1">Lets Enjoy The Nature</h1>
            <p className="heroTextP">
              Get the best prices on 2,000,000+ properties,worldwide
            </p>
          </div>

          {/* search box */}
          <SearchBox />


          {/* button */}
          <Link href={'#'} className="heroBtn group">
            <span className="spanOne group-hover:-translate-x-40 ease"></span>
            <span className="btnText">Search</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;

import { NavLinks } from "@/constant/constant";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CgEricsson } from "react-icons/cg";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = ({ openNav }: { openNav: () => void }) => {


  // scroll event to change navbar color
  // ***********************************************************************************
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 90) {
        setNavBg(true);
      }

      if (window.scrollY < 90) {
        setNavBg(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // ***********************************************************************************

  return (
    <div className={`navbar ${navBg ? "bg-blue-950 shadow-md" : "fixed "}`}>
      <div className="navbarContainer">
        {/* logo and name */}
        <div className="logoContainer">
          <div className="logo">
            <CgEricsson className="logoIcon" />
          </div>

          <h1 className="logoText">Travel NB</h1>
        </div>

        {/* links */}
        <nav className="navLinks">
          {NavLinks.map((link) => {
            return (
              <>
                <Link key={link.id} href={link.url}>
                  <p className="linkText">{link.lable}</p>
                </Link>
              </>
            );
          })}
        </nav>

        {/* btn */}
        <div className="btnContainer">
          <button className="bookBtn">Book Now</button>

          {/* burger menu */}
          <RxHamburgerMenu className="burgerMenu" onClick={openNav} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

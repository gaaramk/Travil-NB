import Link from "next/link";
import React from "react";
import {
  FaFacebookF,
  FaLinkedin,
  FaRadiation,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerContainer">
        {/* partOne */}
        <div className="part">
          <h2 className="FooterHeader">Company</h2>
          <p className="footerP">About Us</p>

          <p className="footerP">Careers</p>

          <p className="footerP">Blog</p>

          <p className="footerP">Gift Cards</p>

          <p className="footerP">Magazine</p>
        </div>

        {/* partTwo */}
        <div className="part">
          <h2 className="FooterHeader">Support</h2>
          <p className="footerP">Contact</p>

          <p className="footerP">Legal Notice</p>

          <p className="footerP">Privacy Policy</p>

          <p className="footerP">Terms & Conditions</p>

          <p className="footerP">Gift Cards</p>

          <p className="footerP">Sitemap</p>
        </div>

        {/* partThree */}
        <div className="part">
          <h2 className="FooterHeader">Other Services</h2>

          <p className="footerP">Car hire </p>

          <p className="footerP">Activity Finder</p>

          <p className="footerP">Tour List</p>

          <p className="footerP">Flight Finder</p>

          <p className="footerP">Travel Agent</p>
        </div>

        {/* partFour */}
        <div className="part">
          <h2 className="FooterHeader">Contact Us</h2>

          <div>
            <h3 className="footerNum">
              Our Mobile Number:{" "}
              <span className="footerNumSpan">+91 1234567890</span>
            </h3>
          </div>

          <div className="mt-6">
            <h3 className="footerNum">
              Our Email:{" "}
              <span className="footerNumSpan">i9MlI@example.com</span>
            </h3>
          </div>
        </div>
      </div>

      {/* bootom part */}
      <div className="footerBottom">
        <p className="footerBottomP">
          Copyright © 2025 Travil-NB. All rights reserved
        </p>

        <div className="footerBottomIcons">
          <span>Social : </span>
          <Link href={"#"} className="footerBottomIcon">
            <FaFacebookF />
          </Link>

          <Link href={"#"} className="footerBottomIcon">
            <FaTwitter />
          </Link>

          <Link href={"#"} className="footerBottomIcon">
            <FaLinkedin />
          </Link>

          <Link href={"#"} className="footerBottomIcon">
            <FaRadiation />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

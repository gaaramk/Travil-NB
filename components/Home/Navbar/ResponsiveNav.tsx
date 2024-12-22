"use client";
import { useState } from "react";
import MobileNav from "./MobileNav";
import Navbar from "./Navbar";

// show and hide mobile nav
// **************************************************************************************
const ResponsiveNav = () => {
  const [showNav, setShowNav] = useState(false);
  const handleShowNav = () => {
    setShowNav(!showNav);
  };

  const handleCloseNav = () => {
    setShowNav(false);
  };
// **************************************************************************************

  return (
    <div>
      <Navbar openNav={handleShowNav} />
      <MobileNav showNav={showNav} closeNav={handleCloseNav} />
    </div>
  );
};

export default ResponsiveNav;

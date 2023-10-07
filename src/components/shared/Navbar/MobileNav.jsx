import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const MobileNav = () => {
  const [showMobileLinks, setShowMobileLinks] = useState(false);

  const toggleMenu = () => {
    setShowMobileLinks(!showMobileLinks);
  };
  return (
    <div className="mobileNav py-2 px-3">
      <div className="mobile__logo">
        <p className="text-2xl select-none font-bold text-white flex">
          PORTFOLIO
        </p>
      </div>
      {showMobileLinks && (
        <div className="mobile__links text-xl font-semibold items-start flex flex-col gap-3 text-white uppercase">
          <div className="mobile__link">
            <Link to="/">Home</Link>
          </div>
          <div className="mobile__link">
            <Link to="/">Work</Link>
          </div>
          <div className="mobile__link">
            <Link to="/">About</Link>
          </div>

          <div className="mobile__link">
            <Link to="/">Contact</Link>
          </div>
          <button className="btn rounded-3xl px-3 py-2 bg-gradient-to-r from-red-400 to-orange-400 hover:from-orange-400 hover:to-red-400">
            Learn more
          </button>
        </div>
      )}
      <div className="burger cursor-pointer" onClick={toggleMenu}>
        {showMobileLinks ? (
          <AiOutlineClose className="text-white font-extrabold text-3xl" />
        ) : (
          <AiOutlineMenu className="closeMenu text-white font-extrabold text-3xl" />
        )}
      </div>
    </div>
  );
};

export default MobileNav;

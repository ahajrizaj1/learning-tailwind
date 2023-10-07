import React, { useEffect, useState } from "react";
import Navbar from "../../components/shared/Navbar/Navbar";
import MobileNav from "../../components/shared/Navbar/MobileNav";

const Home = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 500);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="home h-screen page bg-gradient-to-r from-red-300 to-orange-300">
      {isMobile ? <MobileNav /> : <Navbar />}
    </div>
  );
};

export default Home;

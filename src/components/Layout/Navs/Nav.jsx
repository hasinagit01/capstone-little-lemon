import React, { useEffect, useState } from "react";
import CloseIcon from "../../Icons/CloseIcon";
import NavMenu from "./NavMenu";
import HamburgerMenu from "../../Icons/HamburgerMenu";
import './Nav.css'

const Nav = () => {
  const [hamValue, setHamValue] = useState(false);

  const handleResize = () => {
    if (window.innerWidth >= 1200) {
      setHamValue(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {hamValue ? (
        <nav className="hamburger-nav">
          <CloseIcon onClick={() => setHamValue(!hamValue)} />
          <NavMenu onClick={() => setHamValue(!hamValue)} />
        </nav>
      ) : (
        <>
          <nav className="header-nav">
            <NavMenu />
          </nav>
          <HamburgerMenu onClick={() => setHamValue(!hamValue)} />
        </>
      )}
    </>
  );
};

export default Nav;

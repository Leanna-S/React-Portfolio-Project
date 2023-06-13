import { useEffect, useState } from "react";
import HeaderNav from "./HeaderNav";
import HamburgerMenu from "./HamburgerMenu";

function Header({ allPages, currentLocation }) {
  const [windowSize, setWindowSize] = useState([window.innerWidth, window.innerHeight]);
  const [navShown, setNavShown] = useState(windowSize[0] > 800 ? true : false);
  function toggleNav() {
    if (windowSize[0] > 800) {
      return;
    }

    setNavShown((prevState) => !prevState);
  }
  useEffect(() => {
    function handleWindowResize() {
      setWindowSize([window.innerWidth, window.innerHeight]);
      if (windowSize[0] > 800) {
        setNavShown(true);
      } else {
        setNavShown(false);
      }
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [windowSize]);

  return (
    <header style={{ backgroundColor: navShown ? null : "rgba(0, 0, 0, 0)", width: navShown ? "100%" : null }}>
      <HeaderNav toggleNav={toggleNav} allPages={allPages} navShown={navShown} currentLocation={currentLocation} />
      <HamburgerMenu toggleNav={toggleNav} navShown={navShown} />
    </header>
  );
}

export default Header;

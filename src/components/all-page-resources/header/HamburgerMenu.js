function HamburgerMenu({ toggleNav, navShown }) {
  return (
    <div className={navShown ? "hidden hamburger" : "hamburger"} onClick={toggleNav}>
      <i className="fa-solid fa-bars"></i>
    </div>
  );
}

export default HamburgerMenu;

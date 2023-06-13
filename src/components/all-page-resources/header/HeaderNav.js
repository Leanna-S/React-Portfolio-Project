import NavLink from "../NavLink";

function HeaderNav({ toggleNav, allPages, navShown, currentLocation }) {
  return (
    <nav className={navShown ? null : "hidden"}>
      <ul onMouseLeave={() => setTimeout(toggleNav, 1000)}>
        {allPages.map(([pageName, pageURL], index) => (
          <NavLink pageName={pageName} pageURL={pageURL} currentLocation={currentLocation} key={index} />
        ))}
      </ul>
    </nav>
  );
}

export default HeaderNav;

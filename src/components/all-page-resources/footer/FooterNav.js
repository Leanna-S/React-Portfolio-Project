import NavLink from "../NavLink";

function FooterNav({ allPages, currentLocation }) {
  return (
    <nav>
      <ul>
        {allPages.map(([pageName, pageURL], index) => (
          <NavLink pageName={pageName} pageURL={pageURL} currentLocation={currentLocation} key={index} />
        ))}
      </ul>
    </nav>
  );
}

export default FooterNav;

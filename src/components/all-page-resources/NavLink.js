import { Link } from "react-router-dom";

function NavLink({ pageName, pageURL, currentLocation }) {
  return (
    <li className={currentLocation.pathname === pageURL ? "selected nav-link" : "nav-link"}>
      <Link to={pageURL}>{pageName}</Link>
    </li>
  );
}

export default NavLink;

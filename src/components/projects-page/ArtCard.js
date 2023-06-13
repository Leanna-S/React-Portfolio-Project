import { useState } from "react";

function ArtCard({ imgLink }) {
  const [active, toggleActive] = useState(false);
  function handleCardClick() {
    toggleActive(true);
    setTimeout(() => {
      toggleActive(false);
    }, 2000);
  }
  return (
    <div className={active === true ? "card card-zoom-out" : "card"} tabIndex="0" onClick={handleCardClick}>
      <img src={process.env.PUBLIC_URL + imgLink} alt="" />
    </div>
  );
}

export default ArtCard;

import React, { useState } from "react";
import ArtCard from "./ArtCard";
import Button from "./Button";

const art = [
  "/art/IMG_1111.jpg",
  "/art/IMG_1113.jpg",
  "/art/IMG_0775.jpg",
  "/art/IMG_0987.jpg",
  "/art/IMG_0923.jpg",
  "/art/IMG_1114.jpg",
  "/art/IMG_1315.jpg",
  "/art/IMG_0854.jpg",
  "/art/IMG_1037.jpg",
  "/art/IMG_0972.jpg",
  "/art/IMG_1033.jpg",
  "/art/IMG_1314.jpg",
  "/art/IMG_1312.jpg",
  "/art/IMG_1034.jpg",
  "/art/IMG_1035.jpg",
  "/art/IMG_1112.jpg",
  "/art/IMG_0890.jpg",
  "/art/IMG_1310.jpg",
  "/art/IMG_1313.jpg",
  "/art/IMG_0798.jpg",
  "/art/IMG_0880.jpg",
  "/art/IMG_1209.jpg",
  "/art/IMG_0924.jpg",
  "/art/IMG_1032.jpg",
  "/art/IMG_1318.jpg",
  "/art/IMG_1400.jpg",
  "/art/IMG_0891.jpg",
  "/art/IMG_1039.jpg",
  "/art/IMG_0993.jpg",
  "/art/IMG_0881.jpg",
  "/art/IMG_1316.jpg",
  "/art/IMG_0936.jpg",
  "/art/IMG_0977.jpg",
  "/art/IMG_1036.jpg",
];

function Art() {
  const [currentPhotos, setCurrentPhoto] = useState([0, 1, 2, 3]);
  function nextCard() {
    setCurrentPhoto((prevState) =>
      prevState.map((position) => {
        position = position + 4;
        if (position > art.length - 1) {
          return position - art.length;
        }
        return position;
      })
    );
  }

  function previousCard() {
    setCurrentPhoto((prevState) =>
      prevState.map((position) => {
        position = position - 4;
        if (position < 0) {
          return art.length + position;
        }
        return position;
      })
    );
  }
  return (
    <section className="card-section inactive">
      <h2>Check out my art</h2>
      <div className="card-container" tabIndex="0">
        {currentPhotos.map((photo, index) => {
          return <ArtCard imgLink={art[photo]} key={index} />;
        })}
      </div>
      <div className="card-buttons">
        <Button icon="fa-solid fa-arrow-left" handleOnClick={previousCard} styling="get-previous-card" />
        <Button icon="fa-solid fa-arrow-right" handleOnClick={nextCard} styling="get-next-card" />
      </div>
    </section>
  );
}

export default Art;

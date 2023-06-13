import Button from "./Button";

function CarrouselCard({ image, header, content, id, url, currentProject }) {
  return (
    <div className={currentProject === id ? "project-container" : "project-container hidden"}>
      <img src={image} alt="" />
      <div className="project-text">
        <h2>{header}</h2>
        {content.map((point, index) => (
          <p key={index}>{point}</p>
        ))}
        <Button icon="fa-brands fa-github" handleOnClick={() => window.open(url)} text={"Check it out!"} styling="link-button" />
      </div>
    </div>
  );
}

export default CarrouselCard;

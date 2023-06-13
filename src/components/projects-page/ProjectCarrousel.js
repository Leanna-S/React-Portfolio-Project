import { useState } from "react";
import Button from "./Button";
import CarrouselCard from "./CarrouselCard";

function Carrousel() {
  const projects = [
    {
      image: "/Screenshot 2023-06-01 135318.png",
      header: "Card Match Game",
      content: [`Final Project in my SD-110 JavaScript Basics course at MITT.`, `Written in Vanilla JavaScript.`],
      url: "https://github.com/Leanna-S/SD110-Final-Project",
      id: 0,
    },
    {
      image: "/Screenshot (3).png",
      header: "Portfolio Project",
      content: [`Created using React.js.`, `The code for this very website!`],
      url: "https://github.com/Leanna-S/React-Portfolio-Project",
      id: 1,
    },
    {
      image: "/Picture1.png",
      header: "Cribbage",
      content: [`Collaborated with Tyson (TyR404)`, `Written in Vanilla JS`, `Uses recursive algorithms`],
      url: "https://github.com/TyR404/Cribbage",
      id: 2,
    },
  ];
  const [currentProject, setCurrentProject] = useState(0);
  function handleNextProject() {
    setCurrentProject((prevState) => {
      if (prevState >= projects.length - 1) {
        return 0;
      }
      return prevState + 1;
    });
  }
  function handlePreviousProject() {
    setCurrentProject((prevState) => {
      if (prevState <= 0) {
        return projects.length - 1;
      }
      return prevState - 1;
    });
  }
  return (
    <section className="project-carrousel">
      <h2>Check out my coding projects</h2>
      {projects.map((project) => (
        <CarrouselCard
          image={project.image}
          header={project.header}
          content={project.content}
          id={project.id}
          url={project.url}
          currentProject={currentProject}
          key={project.id}
        />
      ))}

      <div className="project-buttons">
        <Button icon="fa-solid fa-arrow-left" handleOnClick={handlePreviousProject} text="" styling="get-previous-card" />
        <Button icon="fa-solid fa-arrow-right" handleOnClick={handleNextProject} text="" styling="get-next-card" />
      </div>
    </section>
  );
}

export default Carrousel;

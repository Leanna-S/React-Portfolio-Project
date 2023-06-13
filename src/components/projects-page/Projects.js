import Art from "./Art";
import Carrousel from "./ProjectCarrousel";

function Projects() {
  return (
    <main>
      <h1 className="colored">Projects</h1>
      <div className="content">
        <Carrousel />
        <Art />
      </div>
    </main>
  );
}

export default Projects;

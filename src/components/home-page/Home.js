import Ability from "./Ability";

function Home() {
  const abilities = [
    { name: "Web Development", description: "HTML, CSS, and JavaScript", icon: "fa-solid fa-code" },
    { name: "Tools and Knowledge", description: "React.js, APIs, Node.js", icon: "fa-solid fa-screwdriver-wrench" },
    { name: "Digital Art", description: "Procreate and Photoshop", icon: "fa-sharp fa-solid fa-pen-nib" },
  ];
  return (
    <main>
      <div className="home-container">
        <section
          className="introduction-information"
          style={{ backgroundImage: `url(${process.env.PUBLIC_URL + `/image0.jpg`})`, backgroundRepeat: "no-repeat" }}>
          <div className="inactive">
            <h1>
              Hi, I'm <span className="colored">Leanna Szypowski</span>
            </h1>
            <p>
              I am a grade 11 student enrolled in Pembina Trails Early College (PTEC). I am currently in the software development course at
              MITT
            </p>
          </div>
        </section>
        <section className="abilities">
          {abilities.map((ability, index) => (
            <Ability name={ability.name} description={ability.description} icon={ability.icon} key={index} />
          ))}
        </section>
      </div>
    </main>
  );
}

export default Home;

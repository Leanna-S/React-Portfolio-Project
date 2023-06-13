import SkillBar from "./SkillBar";

function About() {
  const skills = [
    { name: "HTML", skillLevel: 100 },
    { name: "CSS", skillLevel: 95 },
    { name: "JavaScript", skillLevel: 90 },
    { name: "React.js", skillLevel: 80 },
  ];
  return (
    <main>
      <h1 className="colored">About</h1>
      <div className="about-container">
        <section className="about-me">
          <img className="inactive" src="20220904_130518.jpg" alt="" />
          <div>
            <h2 className="inactive">Meet Leanna</h2>
            <p className="inactive">
              Leanna Szypowski is a grade 11 student, currently attending MITT. She is working toward receiving the Software Development
              diploma at Manitoba Institute of Trades and Technology. She loves creating websites, from designing them to creating the code
              behind it all. While her skills are fairly new, Leanna wants to learn more about development.
            </p>
            <p className="inactive">
              Leanna has a huge passion for reading, writing, programming, and drawing. She spends most of her time trying to learn new
              things. She greatly enjoys math and english, loving the creativity and problem solving aspects of both. She also finds that
              programming is both logical and creative, making it one of her favourite things to do.
            </p>
          </div>
        </section>
        <section className="skill-bar-container">
          {skills.map((skill, index) => (
            <SkillBar name={skill.name} skillLevel={skill.skillLevel} key={index} />
          ))}
        </section>
      </div>
    </main>
  );
}

export default About;

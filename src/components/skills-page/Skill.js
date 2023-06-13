import SkillSection from "./SkillSection";

function Skill({ mainTitle, sections }) {
  return (
    <section className="inactive">
      <h2>{mainTitle}</h2>
      {sections.map((section, index) => (
        <SkillSection title={section.title} subTitle={section.subTitle} points={section.points} key={index} />
      ))}
    </section>
  );
}

export default Skill;

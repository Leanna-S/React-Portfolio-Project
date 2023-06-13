function SkillBar({ name, skillLevel }) {
  return (
    <div className="skill-bar inactive">
      <p>{name}</p>
      <div style={{ maxWidth: `${skillLevel}%` }} className="skill-bar-color"></div>
    </div>
  );
}

export default SkillBar;

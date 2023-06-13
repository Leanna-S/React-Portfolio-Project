function SkillSection({ title, subTitle, points }) {
  return (
    <>
      {title ? <h3>{title}</h3> : null}
      {subTitle ? <h4>{subTitle}</h4> : null}
      <ul>
        {points.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </>
  );
}

export default SkillSection;

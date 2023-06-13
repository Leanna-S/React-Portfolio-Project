import Skill from "./Skill";

function Skills() {
  const skills = [
    {
      mainTitle: "Experience",
      sections: [
        {
          title: "MusixMatch",
          subTitle: "Curator/Community Leader",
          points: [
            <>
              <span className="colored">Transcribed</span> and <span className="colored">synced</span> song lyrics for{" "}
              <span className="colored">over 300 songs</span>.
            </>,
            <>
              Resolved user issues and provided <span className="colored">technical support</span>.
            </>,
            <>
              Cultivated a <span className="colored">supportive communal atmosphere</span>.
            </>,
          ],
        },
        {
          title: "Phoenix Crane",
          subTitle: "Technological & Secretarial Duties",
          points: [
            <>
              Digitized documents and increased overall <span className="colored">efficiency</span> and{" "}
              <span className="colored">organization</span>.
            </>,
            <>
              Provided <span className="colored">tech support</span> and resolved common issues.
            </>,
          ],
        },
      ],
    },
    {
      mainTitle: "Skills",
      sections: [
        {
          title: null,
          subTitle: null,
          points: [
            <>
              Fluent in <span className="colored">HTML</span>,<span className="colored"> CSS</span>,{" "}
              <span className="colored"> JavaScript</span>, and<span className="colored"> Python</span>.
            </>,
            <>
              Created responsive webpages using <span className="colored">Object Oriented Programming</span>,{" "}
              <span className="colored">APIs</span>, <span className="colored">React</span>, <span className="colored">Node.js</span>, and
              more.
            </>,
            <>
              Managed projects using <span className="colored">Git</span> and <span className="colored">GitHub</span>.
            </>,
            <>
              Used <span className="colored">Bash</span> to streamline workflow.
            </>,
            <>
              Applied knowledge of <span className="colored">programming practices</span> and
              <span className="colored"> industry standards</span>
            </>,
          ],
        },
      ],
    },
    {
      mainTitle: "Education",
      sections: [
        {
          title: "Pembina Trails Early College - MITT",
          subTitle: "Software Development",
          points: [
            <>
              Studying <span className="colored">front-end web development</span>.
            </>,
            <>
              Attending <span className="colored">MITT</span> while in <span className="colored">high school</span>.
            </>,
            <>
              <span className="colored">Accelerated learning</span> with a heavy workload.
            </>,
          ],
        },
        {
          title: "Shaftsbury Highschool",
          subTitle: "Grade 11",
          points: [
            <>
              <span className="colored">Honor roll with distinction</span> (2018-2023)
            </>,
          ],
        },
      ],
    },
    {
      mainTitle: "Certificates & Awards",
      sections: [
        {
          title: null,
          subTitle: null,
          points: [
            <>
              MITT-SD-160 Technical Writing Skills (<span className="colored">2023</span>)
            </>,
            <>
              CISCO IT Essentials 20S (<span className="colored">2022</span>)
            </>,
            <>
              CISCO Cybersecurity Essentials 20S (<span className="colored">2022</span>)
            </>,
            <>
              LIFT Ethics in the Workplace Certificate (<span className="colored">2021</span>)
            </>,
            <>
              Beaver Computing Contest - First Place In School (<span className="colored">2021</span>)
            </>,
            <>
              Beaver Computing Contest - Top 25% (<span className="colored">2019</span>)
            </>,
          ],
        },
      ],
    },
  ];

  return (
    <main>
      <h1 className="colored">Skills</h1>
      <div className="skills">
        {skills.map((skill, index) => (
          <Skill mainTitle={skill.mainTitle} sections={skill.sections} key={index} />
        ))}
      </div>
    </main>
  );
}
export default Skills;

function SkillsList({ developers }) {
  return (
    <div>
      <h2>Developer Skills</h2>

      {developers.map((dev, index) => (
        <div key={index}>
          <h3>{dev.name}</h3>
          <ul>
            {dev.skills.map((skill, i) => (
              <li key={i}>{skill}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default SkillsList;
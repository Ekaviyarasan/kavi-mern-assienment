import { useState } from "react";

function Addskills() {
  const [skills, setSkills] = useState(["HTML", "CSS"]);

  const addSkill = () => {
    setSkills([...skills, "JavaScript"]);
  };

  return (
    <div>
      <ul>
        {skills.map((skill, i) => (
          <li key={i}>{skill}</li>
        ))}
      </ul>

      <button onClick={addSkill}>Add Skill</button>
    </div>
  );
}
export default Addskills
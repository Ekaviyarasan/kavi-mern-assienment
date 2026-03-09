import SkillsList from "./SkillsList";

function DeveloperContainer() {
  const developers = [
    { name: "John", skills: ["HTML", "CSS", "JavaScript"] },
    { name: "Sara", skills: ["React", "Node", "MongoDB"] }
  ];

  return <SkillsList developers={developers} />;
}

export default DeveloperContainer;
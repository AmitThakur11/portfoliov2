import "./style.css";
import { v4 as uuidv4 } from "v4";
const SkillSet = () => {
  const skills = [
    {
      tech: "JS",
      proficiency: 3
    },
    {
      tech: "React",
      proficiency: 4
    },
    {
      tech: "Mongo",
      proficiency: 2
    },
    {
      tech: "Node",
      proficiency: 5
    }
  ];
  return (
    <div>
      {skills.map(({ tech, proficiency }) => {
        return (
          <div key={tech} className="levelContainer">
            <div className="techName">{tech}</div>
            <div className="levelBox">
              <div className="level">
                {Array(proficiency)
                  .fill()
                  .map((item) => {
                    return <div key={uuidv4()} className="levelUnit"></div>;
                  })}
              </div>
              <div className="proficiency">
                {proficiency}/<span>5</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SkillSet;

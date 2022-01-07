import "./style.css";
import { techData } from "../../database";
const Tech = () => {
  return (
    <div className="techContainer">
      <div className="title">Familiar with -</div>
      <div className="techItem__container">
        {techData.map((tech) => {
          return (
            <div key={tech.id} className="techItem">
              <img src={tech.img} alt="" />
              <div>{tech.tech}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Tech;

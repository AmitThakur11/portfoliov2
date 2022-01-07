import "./style.css";
import ProjectImg from "../../media/logo.png";

const ProjectBox = ({ project }) => {
  const {
    id,
    name,
    img,
    projectDescription,
    techUsed,
    live,
    source,
    logo
  } = project;
  return (
    <>
      <div key={id} className="projectBox__container">
        <div className="projectHeading">
          <div className="projectName">{name}</div>
          <img src={logo} alt="/" />
        </div>
        <img src={img} alt="/" />
        <div className="projectDetail">
          <div className="projectDescription">{projectDescription}</div>
          <div className="techUsedContainer">
            <div className="techUsed">
              {techUsed.map(({ id, img, name }) => {
                return (
                  <div key={id} className="techUsed__items">
                    <img src={img} alt="reactjs" />
                    <div className="techName">{name}</div>
                  </div>
                );
              })}
            </div>
            <div className="techButton">
              <a href={live}>
                <button className="linkBtn">Live</button>
              </a>
              <a href={source}>
                <button className="linkBtn">Source</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProjectBox;

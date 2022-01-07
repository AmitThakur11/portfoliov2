import "./style.css";
import DevImg from "../../media/profile.jpg";
import Name from "../../media/name.jpg";
// import Title from "../../media/title.jpg"
import { VscGithub, VscTwitter } from "react-icons/vsc";
import { FaLinkedinIn } from "react-icons/fa";
const Poster = () => {
  return (
    <div className="posterContainer">
      <div className="header">
        <div className="headerTitle">
          #Iam<span>Developer</span>
        </div>
        <div className="socialLink">
          <a href="https://github.com/AmitThakur11">
            <VscGithub />
          </a>
          <a href="https://www.linkedin.com/in/amit-thakur-664503193">
            <FaLinkedinIn />
          </a>
          <a href="https://twitter.com/_amit__thakur">
            <VscTwitter />
          </a>
        </div>
      </div>
      <div className="profile">
        <img className="profilePic" src={DevImg} alt="/" />
        <div className="nameContainer">
          <img className="profileName" src={Name} alt="/" />
          <ul>
            <li>
              <a href="#projects">#Project</a>
            </li>
            <li>
              <a href="#blog">#Blog</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Poster;

import "./styles.css";
import { About, ProjectBox, Poster, Tech, BlogBox } from "./components";
import { ProjectData, BlogData } from "./database";
export default function App() {
  return (
    <div className="App">
      <div className="innerApp__container">
        <Poster />
        <div>
          <About />
        </div>
        <div className="techSection">
          <Tech />
        </div>
        <a id="projects"></a>
        <div className="sectionHeading">Projects</div>

        <div className="projectSection">
          {ProjectData.map((project) => {
            return <ProjectBox key={project.id} project={project} />;
          })}
        </div>

        <a id="blog"></a>
        <div className="sectionHeading">Blogs</div>

        <div className="blogSection">
          {BlogData.map((blog) => {
            return <BlogBox key={blog.id} blog={blog} />;
          })}
        </div>
        <footer>
          <span>&lt;/&gt; </span> by Amit Thakur
        </footer>
      </div>
    </div>
  );
}

import { projects } from "../data/workData";
import ProjectItem from "./ProjectItem";
import gamehub from "../assets/gamehub.jpg";

const Projects = () => {
  return (
    <div id="project" className="section">
      <h1 className="header">Project</h1>
      <div className="grid sm:grid-cols-2 gap-12">
        {projects.map((p) => (
          <ProjectItem key={p.id} title={p.title} img={gamehub} />
        ))}
      </div>
    </div>
  );
};

export default Projects;

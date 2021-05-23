import Project from "../../components/Project";
import Styles from "./styles.module.scss";

function ProjectsPage() {
  return (
    <>
      <div>
        <h3>Projects</h3>
        <div className={Styles.projects}>
          <Project></Project>
          <Project></Project>
          <Project></Project>
          <Project></Project>
        </div>
      </div>
    </>
  );
}

export default ProjectsPage;

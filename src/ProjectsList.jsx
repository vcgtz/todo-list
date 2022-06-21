import ProjectItem from "./ProjectItem.jsx";

const ProjectsList = () => {
  return (
    <div className="pl-3">
      <ProjectItem
        name="Project 1"
        icon="📚"
      />
      <ProjectItem
        name="Project 2"
        icon="📓"
      />
      <ProjectItem
        name="Project 3"
        icon=""
      />
    </div>
  );
}

export default ProjectsList;

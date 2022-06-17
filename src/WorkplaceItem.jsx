import ProjectsList from "./ProjectsList.jsx";

const WorkplaceItem = (params) => {
  return (
    <div>
      <p>{ params.name }</p>
      <ProjectsList />
    </div>
  );
}

export default WorkplaceItem;

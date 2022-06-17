import ProjectsList from "./ProjectsList.jsx";

const WorkplaceItem = (params) => {
  return (
    <div className="pl-3">
      <p>{ params.name }</p>
      <ProjectsList />
    </div>
  );
}

export default WorkplaceItem;

import WorkplaceItem from "./WorkplaceItem.jsx";

const WorkplacesList = () => {
  return (
    <div>
      <h2>Workplaces</h2>
      <WorkplaceItem name="Personal" />
      <WorkplaceItem name="Side Projects" />
      <WorkplaceItem name="Job" />
    </div>
  );
}

export default WorkplacesList;

import WorkplaceItem from "./WorkplaceItem.jsx";

const WorkplacesList = () => {
  return (
    <div className="pr-4">
      <h2 className="font-bold text-lg border-b-4 mb-3">Workplaces</h2>
      <WorkplaceItem name="Personal" />
      <WorkplaceItem name="Side Projects" />
      <WorkplaceItem name="Job" />
    </div>
  );
}

export default WorkplacesList;

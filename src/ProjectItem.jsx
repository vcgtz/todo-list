const ProjectItem = (params) => {
  return (
    <div className="mb-2 mt-2 border-b flex justify-start cursor-pointer">
      {
        <span className="pr-2"> { params.icon || '✅' } </span>
      }
      <h4>{ params.name }</h4>
    </div>
  );
}

export default ProjectItem;

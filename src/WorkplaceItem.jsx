import { useState } from 'react';
import ProjectsList from './ProjectsList.jsx';

const WorkplaceItem = (params) => {
  const [showProjectList, setShowProjectList] = useState(true);

  const handleOnClick = () => {
    setShowProjectList(!showProjectList);
  }

  return (
    <div className='mt-4'>
      <h3
        onClick={ handleOnClick }
        className="font-bold cursor-pointer"
        aria-hidden="true"
      >
      { showProjectList ? '🔼' : '🔽' } { params.name }
      </h3>
      {
        showProjectList ? <ProjectsList /> : ''
      }
    </div>
  );
}

export default WorkplaceItem;

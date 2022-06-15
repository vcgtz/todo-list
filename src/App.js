import { render } from 'react-dom';
import Sidebar from './Sidebar.jsx';
import NotesList from './NotesList.jsx';

const App = () => (
  <div className="flex">
    <div className='w-3/12'>
      <Sidebar />
    </div>
    <div className='w-9/12'>
      <NotesList />
    </div>
  </div>
);

render(<App />, document.getElementById('root'));

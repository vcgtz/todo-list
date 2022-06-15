import { render } from 'react-dom';
import Sidebar from './Sidebar.jsx';
import NotesList from './NotesList.jsx';
import Header from './Header.jsx';

const App = () => (
  <div className="px-6">
    <Header />

    <div className="flex">
      <div className='w-3/12'>
        <Sidebar />
      </div>
      <div className='w-9/12'>
        <NotesList />
      </div>
    </div>
  </div>
);

render(<App />, document.getElementById('root'));

import { useState } from "react";

const NoteItem = props => {
  const [completed, setCompleted] = useState(false);

  const handleChange = event => {
    setCompleted(event.target.checked);
  };

  return (
    <div className="flex justify-start items-center py-2 border rounded-md px-4 my-1">
      <input
        className="appearance-none w-5 h-5 border border-gray-300 rounded-md bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 bg-no-repeat bg-center bg-contain cursor-pointer mr-4"
        type="checkbox"
        name="note1"
        onChange={handleChange} />
      <label
        className={"inline-block text-base " + (completed ? 'line-through text-gray-300' : '')}
        htmlFor="note1">
        { props.title }
      </label>
    </div>
  );
}

export default NoteItem;

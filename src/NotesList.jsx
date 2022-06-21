import NoteItem from "./NoteItem.jsx";

const NotesList = () => {
  return (
    <div id="notes-list">
      <h2 className="font-bold text-lg border-b-4 mb-3">Notes</h2>
      <NoteItem title="Note 01" />
      <NoteItem title="Note 02" />
      <NoteItem title="Note 03" />
    </div>
  );
}

export default NotesList;

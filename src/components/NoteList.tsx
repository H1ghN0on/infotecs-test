import React from "react";
import { NotesContext } from "../contexts/NotesContext";
import { NoteType } from "./Aside";

interface NoteListProps {
  notes: NoteType[];
  noteClassName: string;
  onNoteClick: (note: NoteType) => void;
}

const NoteList: React.FC<NoteListProps> = ({ onNoteClick, noteClassName }) => {
  const { activeNote, notes } = React.useContext(NotesContext);
  return (
    <>
      {notes.map((note) => (
        <div
          key={note.id}
          onClick={() => {
            onNoteClick(note);
          }}
          className={`${noteClassName}  ${note.status} ${
            note.active && "active"
          }`}
        >
          {note.name}
        </div>
      ))}
    </>
  );
};

export default NoteList;

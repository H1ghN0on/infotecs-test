import React from "react";
import { NoteType } from "./Aside";

interface NoteListProps {
  notes: NoteType[];
  noteClassName: string;
  onNoteClick: (note: NoteType) => void;
}

const NoteList: React.FC<NoteListProps> = ({
  onNoteClick,
  notes,
  noteClassName,
}) => {
  return (
    <>
      {notes.map((note) => (
        <div
          key={note.id}
          onClick={() => {
            onNoteClick(note);
          }}
          className={`${noteClassName}  ${note.status}}`}
        >
          Dashboard
        </div>
      ))}
    </>
  );
};

export default NoteList;

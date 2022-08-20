import React from "react";

import { NoteType } from "../App";

interface NoteListProps {
  notes: NoteType[];
  noteClassName: string;
  onNoteClick: (note: NoteType) => void;
}

//Список записей
//Получает на вход список записей, функцию нажатия на запись и название класса для итерируемых элементов

const NoteList: React.FC<NoteListProps> = ({
  notes,
  onNoteClick,
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
          className={`${noteClassName}  ${note.status} ${
            note.active && "active"
          }`}
        >
          {note.name ? note.name : "Без названия"}
        </div>
      ))}
    </>
  );
};

export default NoteList;

import React from "react";
import { NotesContext } from "../contexts/NotesContext";

const NoteFormInactive = () => {
  const { notes } = React.useContext(NotesContext);

  return (
    <div className="note inactive">
      {notes.length > 0 ? "Выберите заметку" : "Добавьте заметку"}
    </div>
  );
};

export default NoteFormInactive;

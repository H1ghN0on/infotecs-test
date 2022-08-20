import React from "react";
import { NotesContext } from "../contexts/NotesContext";

//Комопонент неактивной формы. Отображается в том случае, если пользователем не была выбрана заметка

const NoteFormInactive = () => {
  const { notes } = React.useContext(NotesContext);

  return (
    <div className="note inactive">
      {notes.length > 0 ? "Выберите заметку" : "Добавьте заметку"}
    </div>
  );
};

export default NoteFormInactive;

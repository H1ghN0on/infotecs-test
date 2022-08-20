import React from "react";
import { NotesContext } from "../contexts/NotesContext";
import useNotesContext from "../hooks/useNotesContext";
import { NoteType } from "../App";
import {
  NoteFormDangerZone,
  NoteFormStatusList,
  AppSwitchableInput,
} from "../components";
import "../styles/components/note-form.css";
interface NoteFormProps {
  activeNote: NoteType;
}

//Форма для редактирования записи. Получает на вход выбранную пользователем запись.
//Нужно для того, чтобы удостовериться в наличии выбранной записи

const NoteForm: React.FC<NoteFormProps> = ({ activeNote }) => {
  const notesContext = React.useContext(NotesContext);

  //Хук записей (подробнее в useNotesContext)
  const { updateNoteName, updateNoteText, updateNoteStatus, removeNote } =
    useNotesContext(notesContext);

  const handleRemoveClick = () => {
    removeNote(activeNote);
  };

  return (
    <div className="note">
      <div className="note__info">
        <AppSwitchableInput
          value={activeNote.name}
          onChange={updateNoteName}
          spanClassName="note__name"
          inputClassName="note__input note__name-input"
          placeholder="Название..."
        />
        <AppSwitchableInput
          value={activeNote.text}
          onChange={updateNoteText}
          spanClassName="note__text"
          inputClassName="note__input note__text-input"
          textarea
          placeholder="Описание..."
        />
      </div>

      <NoteFormStatusList
        status={activeNote.status}
        onStatusChange={updateNoteStatus}
      />
      <NoteFormDangerZone onRemove={handleRemoveClick} />
    </div>
  );
};

export default NoteForm;

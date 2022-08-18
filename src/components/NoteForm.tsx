import React from "react";
import { NotesContext } from "../contexts/NotesContext";
import AppSwitchableInput from "./AppSwitchableInput";
import { NoteType } from "./Aside";
import NoteFormAvatar from "./NoteFormAvatar";
import NoteFormDangerZone from "./NoteFormDangerZone";
import NoteFormStatusList from "./NoteFormStatusList";

interface NoteFormProps {
  activeNote: NoteType;
}

const NoteForm: React.FC<NoteFormProps> = ({ activeNote }) => {
  const notesContext = React.useContext(NotesContext);

  const handleNoteNameChange = (name: string) => {
    const notes = notesContext.notes.map((note) =>
      note.active ? { ...note, name } : note
    );

    notesContext.setContext({
      ...notesContext,
      notes,
    });
  };

  const handleNoteTextChange = (text: string) => {
    const notes = notesContext.notes.map((note) =>
      note.active ? { ...note, text } : note
    );
    notesContext.setContext({
      ...notesContext,
      notes,
    });
  };

  const handleNoteStatusChange = (status: "pending" | "done" | "waiting") => {
    const notes = notesContext.notes.map((note) =>
      note.active ? { ...note, status } : note
    );

    notesContext.setContext({
      ...notesContext,
      notes,
    });
  };

  const handleNoteImageChange = (src: string) => {
    const notes = notesContext.notes.map((note) =>
      note.active ? { ...note, image: src } : note
    );
    notesContext.setContext({
      ...notesContext,
      notes,
    });
  };

  const handleNoteRemove = () => {
    const notes = notesContext.notes.filter((note) => note.active);

    notesContext.setContext({
      ...notesContext,
      notes,
    });
  };

  return (
    <div className="note">
      <NoteFormAvatar
        className="note__avatar"
        onChange={handleNoteImageChange}
        src={activeNote.image}
      />
      <AppSwitchableInput
        value={activeNote.name}
        onChange={handleNoteNameChange}
        spanClassName={"note__name"}
      />
      <AppSwitchableInput
        value={activeNote.text}
        onChange={handleNoteTextChange}
        spanClassName={"note__text"}
      />
      <NoteFormStatusList onStatusChange={handleNoteStatusChange} />
      <NoteFormDangerZone onRemove={handleNoteRemove} />
    </div>
  );
};

export default NoteForm;

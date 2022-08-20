import React from "react";
import { NoteType } from "../components/Aside";
import { NotesContextType } from "../contexts/NotesContext";

const useNotes = (notesContext: NotesContextType) => {
  const updateNoteName = (name: string) => {
    const notes = notesContext.notes.map((note) =>
      note.active ? { ...note, name } : note
    );

    notesContext.setContext({
      ...notesContext,
      notes,
    });
  };

  const updateNoteText = (text: string) => {
    const notes = notesContext.notes.map((note) =>
      note.active ? { ...note, text } : note
    );
    notesContext.setContext({
      ...notesContext,
      notes,
    });
  };

  const updateNoteStatus = (status: "pending" | "done" | "waiting") => {
    const notes = notesContext.notes.map((note) =>
      note.active ? { ...note, status } : note
    );

    notesContext.setContext({
      ...notesContext,
      notes,
    });
  };

  const removeNote = (note: NoteType) => {
    const notes = notesContext.notes.filter((note) => !note.active);

    notesContext.setContext({
      ...notesContext,
      notes,
    });
  };

  const activeNote = React.useMemo(
    () => notesContext.notes.find((note) => note.active),
    [notesContext.notes]
  );

  const setActiveNote = (note: NoteType) => {
    notesContext.setContext({
      ...notesContext,
      notes: notesContext.notes.map((_note) =>
        _note.id === note.id
          ? { ..._note, active: true }
          : { ..._note, active: false }
      ),
    });
  };

  const addNewNote = () => {
    const note = {
      id: Date.now(),
      image: "",
      name: "",
      text: "",
      status: "waiting" as "waiting",
      active: true,
    };

    notesContext.setContext({
      ...notesContext,
      notes: [
        note,
        ...notesContext.notes.map((_note) => ({ ..._note, active: false })),
      ],
    });
  };

  return {
    notes: notesContext.notes,
    addNewNote,
    setActiveNote,
    updateNoteName,
    updateNoteText,
    updateNoteStatus,
    removeNote,
    activeNote,
  };
};

export default useNotes;

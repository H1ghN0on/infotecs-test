import React from "react";
import { NoteType } from "../App";
import { NotesContextType } from "../contexts/NotesContext";

const useNotes = (notesContext: NotesContextType) => {
  const updateAndSaveToLocalStorage = (notes: NoteType[]) => {
    notesContext.setContext({
      ...notesContext,
      notes,
    });
    localStorage.setItem("notes", JSON.stringify(notes));
  };
  const updateNoteName = (name: string) => {
    const notes = notesContext.notes.map((note) =>
      note.active ? { ...note, name } : note
    );

    updateAndSaveToLocalStorage(notes);
  };

  const updateNoteText = (text: string) => {
    const notes = notesContext.notes.map((note) =>
      note.active ? { ...note, text } : note
    );
    updateAndSaveToLocalStorage(notes);
  };

  const updateNoteStatus = (status: "pending" | "done" | "waiting") => {
    const notes = notesContext.notes.map((note) =>
      note.active ? { ...note, status } : note
    );

    updateAndSaveToLocalStorage(notes);
  };

  const removeNote = (note: NoteType) => {
    const notes = notesContext.notes.filter((note) => !note.active);

    updateAndSaveToLocalStorage(notes);
  };

  const activeNote = React.useMemo(
    () => notesContext.notes.find((note) => note.active),
    [notesContext.notes]
  );

  const setActiveNote = (note: NoteType) => {
    const notes = notesContext.notes.map((_note) =>
      _note.id === note.id
        ? { ..._note, active: true }
        : { ..._note, active: false }
    );
    updateAndSaveToLocalStorage(notes);
  };

  const addNewNote = () => {
    const note: NoteType = {
      id: Date.now(),
      name: "",
      text: "",
      status: "waiting" as "waiting",
      active: true,
    };
    const notes = [
      note,
      ...notesContext.notes.map((_note) => ({ ..._note, active: false })),
    ];

    updateAndSaveToLocalStorage(notes);
  };

  const loadNotes = () => {
    const rawNotes = localStorage.getItem("notes");
    if (rawNotes) {
      const notes = JSON.parse(rawNotes);
      notesContext.setContext({
        ...notesContext,
        notes,
      });
    }
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
    loadNotes,
  };
};

export default useNotes;

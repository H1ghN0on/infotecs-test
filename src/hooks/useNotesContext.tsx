import React from "react";
import { NoteType } from "../App";
import { NotesContextType } from "../contexts/NotesContext";

//Хук для работы с записями

//Получает на вход контекст с записями и возвращает почти все нижеописанные функции
//Каждое изменение записей влечёт за собой сохранение в локальном хранилище браузера

const useNotes = (notesContext: NotesContextType) => {
  //обновление записей и сохранение в локальном хранлище
  const updateAndSaveToLocalStorage = (notes: NoteType[]) => {
    notesContext.setContext({
      ...notesContext,
      notes,
    });
    localStorage.setItem("notes", JSON.stringify(notes));
  };

  //Изменение имени записи

  const updateNoteName = (name: string) => {
    const notes = notesContext.notes.map((note) =>
      note.active ? { ...note, name } : note
    );

    updateAndSaveToLocalStorage(notes);
  };

  //Изменение описания записии

  const updateNoteText = (text: string) => {
    const notes = notesContext.notes.map((note) =>
      note.active ? { ...note, text } : note
    );
    updateAndSaveToLocalStorage(notes);
  };

  //Изменение статуса записи

  const updateNoteStatus = (status: "pending" | "done" | "waiting") => {
    const notes = notesContext.notes.map((note) =>
      note.active ? { ...note, status } : note
    );

    updateAndSaveToLocalStorage(notes);
  };

  //Удаление записи

  const removeNote = (note: NoteType) => {
    const notes = notesContext.notes.filter((note) => !note.active);

    updateAndSaveToLocalStorage(notes);
  };

  //Получение выбранной пользователем записи

  const activeNote = React.useMemo(
    () => notesContext.notes.find((note) => note.active),
    [notesContext.notes]
  );

  //Обновление выбранной записи

  const setActiveNote = (note: NoteType) => {
    const notes = notesContext.notes.map((_note) =>
      _note.id === note.id
        ? { ..._note, active: true }
        : { ..._note, active: false }
    );
    updateAndSaveToLocalStorage(notes);
  };

  //Добавление новой записи

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

  //Загрузка записей из локального хранилища

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

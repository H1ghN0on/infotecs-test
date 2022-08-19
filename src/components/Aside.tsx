import React from "react";
import { NotesContext } from "../contexts/NotesContext";
import NoteList from "./NoteList";

export type NoteType = {
  id: number;
  image: string;
  name: string;
  text: string;
  status: "pending" | "done" | "waiting";
  active: boolean;
};

const Aside = () => {
  const notesContext = React.useContext(NotesContext);

  const [searchValue, setSearchValue] = React.useState<string>("");

  const searchedNotes = React.useMemo(() => {
    return notesContext.notes.filter((note) =>
      note.name.toLowerCase().includes(searchValue.toLowerCase())
    );
  }, [notesContext.notes, searchValue]);

  const handleSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleNoteClick = (note: NoteType) => {
    notesContext.setContext({
      ...notesContext,
      notes: notesContext.notes.map((_note) =>
        _note.id === note.id
          ? { ..._note, active: true }
          : { ..._note, active: false }
      ),
    });
  };

  const handleNoteAddClick = () => {
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

  return (
    <aside>
      <div className="aside__item search">
        <input
          value={searchValue}
          onChange={handleSearchValue}
          placeholder="Поиск..."
          type="text"
          className="search__input"
        />
      </div>
      <div onClick={handleNoteAddClick} className="aside__item add">
        Добавить
      </div>
      <NoteList
        noteClassName="aside__item note"
        notes={searchedNotes}
        onNoteClick={handleNoteClick}
      />
    </aside>
  );
};

export default Aside;

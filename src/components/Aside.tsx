import React from "react";
import { NotesContext } from "../contexts/NotesContext";
import useNotesContext from "../hooks/useNotesContext";

import NoteList from "./NoteList";

import "../styles/components/aside.css";

export type NoteType = {
  id: number;
  name: string;
  text: string;
  status: "pending" | "done" | "waiting";
  active: boolean;
};
interface AsideProps {
  resizableWidth: number;
  startResizing: (e: any) => void;
}

const Aside = React.forwardRef<HTMLBaseElement, AsideProps>((props, ref) => {
  const notesContext = React.useContext(NotesContext);
  const { addNewNote, setActiveNote, notes } = useNotesContext(notesContext);

  const [searchValue, setSearchValue] = React.useState<string>("");

  const searchedNotes = React.useMemo(() => {
    return notes.filter((note) =>
      note.name.toLowerCase().includes(searchValue.toLowerCase())
    );
  }, [notes, searchValue]);

  const handleSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <aside ref={ref} style={{ width: props.resizableWidth }}>
      <div className="aside__content">
        <div className="aside__item search">
          <input
            value={searchValue}
            onChange={handleSearchValue}
            placeholder="Поиск..."
            type="text"
            className="search__input"
          />
        </div>
        <div onClick={addNewNote} className="aside__item add">
          Добавить
        </div>
        <NoteList
          noteClassName="aside__item note"
          notes={searchedNotes}
          onNoteClick={setActiveNote}
        />

        <div
          className="aside__drag-border"
          onMouseDown={props.startResizing}
        ></div>
      </div>
    </aside>
  );
});

export default Aside;

import React from "react";
import { NotesContext } from "../contexts/NotesContext";
import useNotesContext from "../hooks/useNotesContext";
import useSearch from "../hooks/useSearch";

import { NoteList } from "../components";

import "../styles/components/aside.css";

interface AsideProps {
  resizableWidth: number;
  startResizing: (e: any) => void;
}

const Aside = React.forwardRef<HTMLBaseElement, AsideProps>((props, ref) => {
  const notesContext = React.useContext(NotesContext);
  const { addNewNote, setActiveNote, notes } = useNotesContext(notesContext);

  const [searchValue, setSearchValue] = React.useState<string>("");

  const { checkSearched, searchedValues } = useSearch(
    searchValue,
    notes,
    "name"
  );

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
        {!searchValue && (
          <div onClick={addNewNote} className="aside__item add">
            Добавить
          </div>
        )}
        {checkSearched ? (
          <NoteList
            noteClassName="aside__item note"
            notes={searchedValues}
            onNoteClick={setActiveNote}
          />
        ) : (
          <div className="note empty">Нет результатов</div>
        )}

        <div
          className="aside__drag-border"
          onMouseDown={props.startResizing}
        ></div>
      </div>
    </aside>
  );
});

export default Aside;

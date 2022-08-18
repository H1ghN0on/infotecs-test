import React from "react";
import NoteList from "./NoteList";

export type NoteType = {
  id: number;
  image: string;
  name: string;
  text: string;
  status: "pending" | "done" | "waiting";
};

interface AsideProps {
  notes: NoteType[];
  switchNote: (note: NoteType) => void;
}

const Aside: React.FC<AsideProps> = ({ notes, switchNote }) => {
  const [searchValue, setSearchValue] = React.useState<string>("");

  const searchedNotes = React.useMemo(() => {
    return notes.filter((note) => note.name.includes(searchValue));
  }, [notes, searchValue]);

  const handleSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
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
      <NoteList
        noteClassName="aside__item note"
        notes={searchedNotes}
        onNoteClick={switchNote}
      />
    </aside>
  );
};

export default Aside;

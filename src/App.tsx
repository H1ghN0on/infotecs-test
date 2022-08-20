import React from "react";
import NoteForm from "./components/NoteForm";
import NoteFormInactive from "./components/NoteFormInactive";
import { NotesContext } from "./contexts/NotesContext";
import useNotesContext from "./hooks/useNotesContext";
import Layout from "./layout/Layout";

export type NoteType = {
  id: number;
  name: string;
  text: string;
  status: "pending" | "done" | "waiting";
  active: boolean;
};

function App() {
  const notesContext = React.useContext(NotesContext);

  const { activeNote, loadNotes } = useNotesContext(notesContext);

  React.useEffect(() => {
    loadNotes();
  }, []);

  return (
    <Layout>
      {activeNote ? <NoteForm activeNote={activeNote} /> : <NoteFormInactive />}
    </Layout>
  );
}

export default App;

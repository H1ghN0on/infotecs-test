import React from "react";
import NoteForm from "./components/NoteForm";
import NoteFormInactive from "./components/NoteFormInactive";
import { NotesContext } from "./contexts/NotesContext";
import useNotesContext from "./hooks/useNotesContext";
import Layout from "./layout/Layout";

function App() {
  const notesContext = React.useContext(NotesContext);

  const { activeNote } = useNotesContext(notesContext);

  return (
    <Layout>
      {activeNote ? <NoteForm activeNote={activeNote} /> : <NoteFormInactive />}
    </Layout>
  );
}

export default App;

import React from "react";
import NoteForm from "./components/NoteForm";
import { NotesContext, NotesContextProvider } from "./contexts/NotesContext";
import Layout from "./layout/Layout";

function App() {
  const { notes } = React.useContext(NotesContext);

  const activeNote = React.useMemo(() => {
    return notes.find((note) => note.active);
  }, [notes]);

  return (
    <Layout>
      {activeNote ? <NoteForm activeNote={activeNote} /> : <div>Где</div>}
    </Layout>
  );
}

export default App;

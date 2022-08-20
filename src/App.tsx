import React from "react";

import { NoteFormInactive, NoteForm } from "./components";
import { NotesContext } from "./contexts/NotesContext";
import useNotesContext from "./hooks/useNotesContext";
import { Layout } from "./layout";

export type NoteType = {
  id: number;
  name: string;
  text: string;
  status: "pending" | "done" | "waiting";
  active: boolean;
};

//Как только запускается приложение, в него загружаются все записи из локального хранилища
//Всё приложение представляет из себя макет (Layout.tsx) внутри которого находится форма редактирования записи
//Оно обслуживается контекстом записей и дополнительными хуками

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

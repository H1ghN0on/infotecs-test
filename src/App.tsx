import React from "react";
import Aside, { NoteType } from "./components/Aside";
import NoteForm from "./components/NoteForm";
import Layout from "./layout/Layout";

function App() {
  const [notes, setNotes] = React.useState<NoteType[]>([
    {
      id: 1,
      image: "chiaki.jpg",
      name: "Get Chiaki",
      text: "",
      status: "waiting",
    },
    {
      id: 2,
      image: "chiaki.jpg",
      name: "Take down shogun",
      text: "",
      status: "waiting",
    },
    {
      id: 3,
      image: "chiaki.jpg",
      name: "Remember the Aiden Pearce Story",
      text: "",
      status: "waiting",
    },
    {
      id: 4,
      image: "chiaki.jpg",
      name: "Rerun LMR",
      text: "ketrin ketrin ketrin ketrin ketrin ketrin ketrin ketrin ketrin ketrin ketrin ketrin ketrin",
      status: "done",
    },
  ]);
  const [activeNote, setActiveNote] = React.useState<NoteType>(notes[0]);

  return (
    <Layout notes={notes} switchNote={setActiveNote}>
      <NoteForm note={activeNote} />
    </Layout>
  );
}

export default App;

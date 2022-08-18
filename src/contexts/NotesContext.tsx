import React from "react";
import { NoteType } from "../components/Aside";

type Props = {
  children: React.ReactNode;
};

type Context = {
  notes: NoteType[];
  activeNote: NoteType | null;
  setContext: React.Dispatch<React.SetStateAction<Context>>;
};

const initialContext: Context = {
  notes: [
    {
      id: 1,
      image: "chiaki.jpg",
      name: "Get Chiaki",
      text: "",
      status: "waiting",
      active: false,
    },
    {
      id: 2,
      image: "chiaki.jpg",
      name: "Take down shogun",
      text: "",
      status: "waiting",
      active: false,
    },
    {
      id: 3,
      image: "chiaki.jpg",
      name: "Remember the Aiden",
      text: "",
      status: "waiting",
      active: false,
    },
    {
      id: 4,
      image: "chiaki.jpg",
      name: "Rerun LMR",
      text: "ketrin ketrin ketrin ketrin ketrin ketrin ketrin ketrin ketrin ketrin ketrin ketrin ketrin",
      status: "done",
      active: false,
    },
  ],
  activeNote: null,
  setContext: (): void => {
    throw new Error("setContext function must be overridden");
  },
};

const NotesContext = React.createContext<Context>(initialContext);

const NotesContextProvider = ({ children }: Props): JSX.Element => {
  const [contextState, setContext] = React.useState<Context>(initialContext);

  return (
    <NotesContext.Provider value={{ ...contextState, setContext }}>
      {children}
    </NotesContext.Provider>
  );
};

export { NotesContext, NotesContextProvider };

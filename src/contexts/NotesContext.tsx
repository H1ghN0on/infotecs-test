import React from "react";
import { NoteType } from "../components/Aside";

type Props = {
  children: React.ReactNode;
};

export type NotesContextType = {
  notes: NoteType[];
  activeNote: NoteType | null;
  setContext: React.Dispatch<React.SetStateAction<NotesContextType>>;
};

const initialContext: NotesContextType = {
  notes: [
    {
      id: 1,

      name: "Get Chiaki",
      text: "",
      status: "waiting",
      active: false,
    },
    {
      id: 2,

      name: "Take down shogun",
      text: "",
      status: "waiting",
      active: false,
    },
    {
      id: 3,

      name: "Remember the Aiden",
      text: "",
      status: "waiting",
      active: false,
    },
    {
      id: 4,

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

const NotesContext = React.createContext<NotesContextType>(initialContext);

const NotesContextProvider = ({ children }: Props): JSX.Element => {
  const [contextState, setContext] =
    React.useState<NotesContextType>(initialContext);

  return (
    <NotesContext.Provider value={{ ...contextState, setContext }}>
      {children}
    </NotesContext.Provider>
  );
};

export { NotesContext, NotesContextProvider };

import React from "react";
import { NoteType } from "../App";

type Props = {
  children: React.ReactNode;
};

export type NotesContextType = {
  notes: NoteType[];
  activeNote: NoteType | null;
  setContext: React.Dispatch<React.SetStateAction<NotesContextType>>;
};

const initialContext: NotesContextType = {
  notes: [],
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

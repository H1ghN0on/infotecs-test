import React from "react";
import { NoteType } from "../App";

//Контекст записей
//Был использован контекст по двум причинам:
//1. Запрещено использовать Redux;
//2. Записи используются практически в каждом компонента, отчего становится бессмысленным постоянно прокидывать
//нужные данные с помощью пропсов

//Каждая запись состоит из следующих свойств:
//1. Название
//2. Описание
//3. Статус
//4. Активность
//5. Идентификатор

type Props = {
  children: React.ReactNode;
};

export type NotesContextType = {
  notes: NoteType[];
  setContext: React.Dispatch<React.SetStateAction<NotesContextType>>;
};

const initialContext: NotesContextType = {
  notes: [],
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

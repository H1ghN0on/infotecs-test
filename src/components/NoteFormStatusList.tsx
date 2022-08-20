import React from "react";
import { AppButton } from "../components";

interface NoteFormStatusListProps {
  status: "pending" | "done" | "waiting";
  onStatusChange: (status: "pending" | "done" | "waiting") => void;
}

//Компонент выбора статуса. Один из составляющих формы редактирования записи.
//Получает на вход текущий статус записи и функцию изменения статуса.
//Статус является всегда одной из трех строк: "pending", "done" или "waiting".

const NoteFormStatusList: React.FC<NoteFormStatusListProps> = ({
  onStatusChange,
  status,
}) => {
  //Статус меняется в зависимости от имени элемента, по которому пользователь нажал
  const handleStatusClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onStatusChange(
      (e.target as HTMLButtonElement).name as "pending" | "done" | "waiting"
    );
  };

  return (
    <div className="note__status-list">
      <AppButton
        onClick={handleStatusClick}
        name="waiting"
        className={
          "note__status-btn waiting " + (status === "waiting" && "active")
        }
      >
        Ожидает
      </AppButton>
      <AppButton
        onClick={handleStatusClick}
        name="pending"
        className={
          "note__status-btn pending " + (status === "pending" && "active")
        }
      >
        В процессе
      </AppButton>
      <AppButton
        onClick={handleStatusClick}
        name="done"
        className={"note__status-btn done " + (status === "done" && "active")}
      >
        Выполнено
      </AppButton>
    </div>
  );
};

export default NoteFormStatusList;

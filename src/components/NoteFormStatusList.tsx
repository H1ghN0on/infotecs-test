import React from "react";
import { AppButton } from "../components";

interface NoteFormStatusListProps {
  status: "pending" | "done" | "waiting";
  onStatusChange: (status: "pending" | "done" | "waiting") => void;
}

const NoteFormStatusList: React.FC<NoteFormStatusListProps> = ({
  onStatusChange,
  status,
}) => {
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

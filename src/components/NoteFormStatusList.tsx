import React from "react";
import AppButton from "./AppButton";

interface NoteFormStatusListProps {
  onStatusChange: (status: "pending" | "done" | "waiting") => void;
}

const NoteFormStatusList: React.FC<NoteFormStatusListProps> = ({
  onStatusChange,
}) => {
  const handleStatusClick = (e: React.MouseEvent<HTMLButtonElement>) => {};

  return (
    <div className="note__status-list">
      <AppButton
        onClick={handleStatusClick}
        name="waiting"
        className="note__status-btn waiting"
      >
        Ожидает
      </AppButton>
      <AppButton
        onClick={handleStatusClick}
        name="pending"
        className="note__status-btn pending"
      >
        В процессе
      </AppButton>
      <AppButton
        onClick={handleStatusClick}
        name="done"
        className="note__status-btn active done"
      >
        Выполнено
      </AppButton>
    </div>
  );
};

export default NoteFormStatusList;

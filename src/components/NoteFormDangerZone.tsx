import React from "react";
import { AppButton } from "../components";

interface NoteFormDangerZoneProps {
  onRemove: () => void;
}

const NoteFormDangerZone: React.FC<NoteFormDangerZoneProps> = ({
  onRemove,
}) => {
  const handleRemoveButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (window.confirm("Вы действительно хотите удалить эту запись?")) {
      onRemove();
    }
  };

  return (
    <div className="note__danger-zone">
      <AppButton
        onClick={handleRemoveButtonClick}
        className="note__danger-btn remove"
      >
        Удалить
      </AppButton>
    </div>
  );
};

export default NoteFormDangerZone;

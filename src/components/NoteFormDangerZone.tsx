import React from "react";
import AppButton from "./AppButton";

interface NoteFormDangerZoneProps {
  onRemove: () => void;
}

const NoteFormDangerZone: React.FC<NoteFormDangerZoneProps> = ({
  onRemove,
}) => {
  const handleRemoveButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onRemove();
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

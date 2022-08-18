import React from "react";
import AppSwitchableInput from "./AppSwitchableInput";
import { NoteType } from "./Aside";
import NoteFormAvatar from "./NoteFormAvatar";
import NoteFormDangerZone from "./NoteFormDangerZone";
import NoteFormStatusList from "./NoteFormStatusList";

interface NoteFormProps {
  note: NoteType;
}

const NoteForm: React.FC<NoteFormProps> = ({ note }) => {
  const [noteData, setNoteData] = React.useState<NoteType>(note);

  const handleNoteNameChange = (name: string) => {
    setNoteData({
      ...noteData,
      name,
    });
  };

  const handleNoteTextChange = (text: string) => {
    setNoteData({
      ...noteData,
      text,
    });
  };

  const handleNoteStatusChange = (status: "pending" | "done" | "waiting") => {
    setNoteData({
      ...noteData,
      status,
    });
  };

  const handleNoteImageChange = (src: string) => {};
  return (
    <div className="note">
      <NoteFormAvatar
        className="note__avatar"
        onChange={handleNoteImageChange}
        src={note.image}
      />
      <AppSwitchableInput
        value={noteData.name}
        onChange={handleNoteNameChange}
        spanClassName={"note__name"}
      />
      <AppSwitchableInput
        value={noteData.text}
        onChange={handleNoteTextChange}
        spanClassName={"note__text"}
      />
      <NoteFormStatusList onStatusChange={handleNoteStatusChange} />
      <NoteFormDangerZone onRemove={() => {}} />
    </div>
  );
};

export default NoteForm;

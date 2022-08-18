import React from "react";

interface NoteFormAvatarProps {
  onChange: (value: string) => void;
  src: string;
  className?: string;
}

const NoteFormAvatar: React.FC<NoteFormAvatarProps> = ({
  className,
  onChange,
  src,
}) => {
  const handleImageChange = () => {
    onChange("");
  };
  return (
    <div className={className}>
      <img src={`/${src}`} alt="" />
    </div>
  );
};

export default NoteFormAvatar;

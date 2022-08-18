import React from "react";
import useOutsider from "../hooks/useOutsider";

interface AppSwitchableInputProps {
  onChange: (value: string) => void;
  value: string;
  textarea?: boolean;
  spanClassName?: string;
  inputClassName?: string;
}

const AppSwitchableInput: React.FC<AppSwitchableInputProps> = ({
  onChange,
  value,
  textarea,
  spanClassName,
  inputClassName,
}) => {
  const inputRef = React.useRef(null);
  const [isInputActive, setInputActive] = React.useState<boolean>(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value } = e.target;
    if (value) onChange(value);
  };

  useOutsider(inputRef, () => {
    if (isInputActive) {
      setInputActive(false);
    }
  });

  if (isInputActive) {
    if (textarea) {
      return (
        <textarea
          className={inputClassName}
          ref={() => inputRef}
          value={value}
          onChange={handleInputChange}
        />
      );
    } else {
      return (
        <input
          className={inputClassName}
          ref={() => inputRef}
          type="text"
          value={value}
          onChange={handleInputChange}
        />
      );
    }
  } else {
    return (
      <span
        className={spanClassName}
        onClick={() => {
          setInputActive(true);
        }}
      >
        {value}
      </span>
    );
  }
};

export default AppSwitchableInput;

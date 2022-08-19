import React from "react";
import useOutsider from "../hooks/useOutsider";

interface AppSwitchableInputProps {
  onChange: (value: string) => void;
  value: string;
  textarea?: boolean;
  spanClassName?: string;
  inputClassName?: string;
  placeholder?: string;
}

const AppSwitchableInput: React.FC<AppSwitchableInputProps> = ({
  onChange,
  value,
  textarea,
  spanClassName,
  inputClassName,
  placeholder,
}) => {
  const inputRef = React.useRef(null);

  const [isInputActive, setInputActive] = React.useState<boolean>(!!value);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInputActive(true);
    const { value } = e.target;

    onChange(value);
  };

  const handleTextAreaResize = (
    e: React.KeyboardEvent<HTMLTextAreaElement>
  ) => {
    e.currentTarget.style.height = "inherit";
    e.currentTarget.style.height = `${e.currentTarget.scrollHeight}px`;
  };

  const handleTextAreaFocus = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    const val = e.target.value;
    e.target.value = "";
    e.target.value = val;
    e.currentTarget.style.height = `${e.currentTarget.scrollHeight}px`;
  };

  useOutsider(inputRef, () => {
    if (isInputActive) {
      setInputActive(false);
    }
  });

  if (!value || isInputActive) {
    if (textarea) {
      return (
        <textarea
          className={inputClassName}
          ref={inputRef}
          value={value}
          onChange={handleInputChange}
          autoFocus
          onKeyDown={handleTextAreaResize}
          onFocus={handleTextAreaFocus}
          placeholder={placeholder}
        />
      );
    } else {
      return (
        <input
          className={inputClassName}
          ref={inputRef}
          type="text"
          value={value}
          onChange={handleInputChange}
          autoFocus
          multiple
          placeholder={placeholder}
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

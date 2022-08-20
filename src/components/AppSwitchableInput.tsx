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

//Базовый переключаемый инпут приложения. В зависимости от состояния может быть инпутом или простым текстом

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

  //Высота Textarea должна изменяться в зависимости от размера введённых данных
  //При каждом изменении внутри textarea высчитывается полная высота элемента (включая невидимую часть). Это значение
  //становится истинной высотой элемента

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

  //Хук, используемый для отслеживания клика вне инпута. Предназначен для изменения состояния компонента

  useOutsider(inputRef, () => {
    if (isInputActive) {
      setInputActive(false);
    }
  });

  //Если в инпут ничего не было введено или инпут на данный момент не активен то рендерится обычное текстовое поле
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

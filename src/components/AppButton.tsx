import React from "react";

import "../styles/components/app-button.css";

interface AppButtonProps {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className: string;
  name?: string;
  children: React.ReactNode;
}

const AppButton: React.FC<AppButtonProps> = ({
  className,
  onClick,
  name,
  children,
}) => {
  return (
    <button name={name} className={`app-btn ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default AppButton;
